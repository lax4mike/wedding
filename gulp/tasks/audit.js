const runSequence = require("run-sequence");

const createLighthouseTask = require("../quench/createLighthouseTask.js");

module.exports = function auditTask(projectRoot) {
  return function(cb) {

    createLighthouseTask("lighthouse", {
      outputDir: `${projectRoot}/audits/`,
      buildDir: `${projectRoot}/build/`
    });

    return runSequence(["lighthouse"], cb);
  };
};
