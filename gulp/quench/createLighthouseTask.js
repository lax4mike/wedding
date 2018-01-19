/**
* this task is based off this:
* https://github.com/GoogleChrome/lighthouse/blob/master/docs/recipes/gulp/gulpfile.js
*/
const ReportGenerator = require("lighthouse/lighthouse-core/report/v2/report-generator.js");
const gulp           = require("gulp");
const quench         = require("./quench.js");
const R              = require("ramda");
const lighthouse     = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const connect        = require("gulp-connect");
const moment         = require("moment");
const fs             = require("fs");
const mkdirp         = require("mkdirp");
const argv           = require("yargs").argv;
const express        = require("express");
const opn            = require("opn");

const lighthouseConfig = require("../lighthouse-config.js");
const PORT = 8888;

module.exports = function lighthouseTask(taskName, userConfig) {

  const taskConfig = R.merge({
    outputDir: "",
    buildDir: "",
    url: null,
    chromeLauncherOptions: { chromeFlags: ["--headless"] }
  }, userConfig);


  const { buildDir, outputDir, chromeLauncherOptions } = taskConfig;

  if (!buildDir || !outputDir){
    quench.throwError(
      "Audit task requires a buildDir and outputDir!\n",
      `Given jsConfig: ${JSON.stringify(taskConfig, null, 2)}`
    );
  }


  /**
   * Start server
   */
  const startServer = function() {
    return connect.server({
      root: buildDir,
      port: PORT
    });
  };


  /**
   * Stop server
   */
  const stopServer = function() {
    connect.serverClose();
  };


  /**
   * Run lighthouse
   */
  function launchChromeAndRunLighthouse(url, flags = {}, config = lighthouseConfig) {
    return chromeLauncher.launch(chromeLauncherOptions).then(chrome => {
      const port = chrome.port;
      return lighthouse(url, { port }, config).then(results =>
        chrome.kill().then(() => results)
      );
    });
  }


  /**
   * Handle ok result
   * @param {Object} results - Lighthouse results
   */
  const handleOk = function(results) {

    const timestamp = moment().format("YYYY-MM-DD-HH-mm");
    const filename = `${outputDir}${timestamp}.json`;

    // make sure the output dir exists
    mkdirp.sync(outputDir);

    fs.writeFileSync(filename, JSON.stringify(results, null, 2));

    quench.logYellow("lighthouse", `report saved! ${filename}`);
    quench.logYellow("lighthouse", "drop this file here: https://googlechrome.github.io/lighthouse/viewer/");


    const reportHtml = new ReportGenerator().generateReportHtml(results);
    createReportServer(reportHtml);

    return results;
  };


  /**
   * Creates server for results
   * and opens in a browser when --serve is true audit results
   * will automatically populate in a browser window
   * @param {string} html - generated html
   */
  const createReportServer = function(html){
    if(argv.serve){
      const app = express();
      const port = PORT + 1;

      app.get("/", function(req,res){
        res.send(html);
      });
      app.listen(port);

      const url = `http://localhost:${port}`;
      quench.logYellow("lighthouse", `View the report at ${url}`);
      opn(url);
    }
  };

  // manually stop the process when the user types ctrl + c
  // it's not stopping on it's own because of some bizarre conflict between
  // gulp-connect and express
  process.on("SIGINT", () => process.exit(0));


  /** Detect local or remote url
   * If an array omits http(s)://, append a localhost hostname using PORT
   * Returns an array with the url first, and boolean (true if local) as second
   * @param {String} url
   * @returns {Array} [url, boolean]
   */
  const localOrRemoteUrl = R.ifElse(R.test(/^https?:\/\//),
    (url) => [url, false],
    (url) => [`http://localhost:${PORT}/${url}`, true]);



  gulp.task(taskName, function() {

    const providedUrl = argv.url || userConfig.url || "/";
    const [url, useServer] = localOrRemoteUrl(providedUrl);

    useServer && startServer();

    return launchChromeAndRunLighthouse(url)
      .then((results) => {
        useServer && stopServer();
        handleOk(results);
      })
      .catch((err) => {
        useServer && stopServer();
        quench.throwError(err);
      });
  });
};
