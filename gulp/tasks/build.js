const runSequence = require("run-sequence");

const quench = require("../quench/quench.js");
const createCopyTask = require("../quench/createCopyTask.js");
const createJsTask = require("../quench/createJsTask.js");
const createCssTask = require("../quench/createCssTask.js");
const createImageResizeTask = require("../quench/createImageResizeTask.js");
const createBrowserSyncTask = require("../quench/createBrowserSyncTask.js");

module.exports = function buildTask(projectRoot) {

  const buildDir = `${projectRoot}/build`;
  const clientDir = `${projectRoot}/client`;

  return function(){

    /* copy */
    createCopyTask("build-copy", {
      src: [
        `${clientDir}/index.html`,
        `${clientDir}/favicon.ico`,
        `${clientDir}/img/**`
      ],
      dest: buildDir,
      base: `${clientDir}`
    });

    /* js */
    createJsTask("build-js", {
      dest: `${buildDir}/js/`,
      files: [
        {
          gulpTaskId: "build-js-index",
          entry: `${clientDir}/js/index.jsx`,
          filename: "index.js",
          watch: [
            `${clientDir}/js/**/*.js`,
            `${clientDir}/js/**/*.jsx`
          ]
        },
        {
          gulpTaskId: "build-js-polyfill",
          entry: `${clientDir}/polyfill/index.js`,
          filename: "polyfill.js",
          watch: [
            `${clientDir}/polyfill/**`
          ]
        }
      ]
    });

    /* css */
    createCssTask("build-css", {
      src: [
        `${clientDir}/scss/**/*.scss`,
        `${clientDir}/js/**/*.scss`
      ],
      dest: `${buildDir}/css/`,
      watch: [
        `${clientDir}/scss/**/*.scss`,
        `${clientDir}/js/**/*.scss`
      ],
      filename: "index.css"
    });


    /* thumbnails */
    createImageResizeTask("build-thumbnails", {
      src: `${clientDir}/img-gallery/**`,
      dest: `${buildDir}/img/gallery/thumb`,
      base: `${clientDir}/img-gallery/`,
      // https://github.com/scalableminds/gulp-image-resize
      resize: {
        width: 320
      }
    });

    /* gallery images */
    createImageResizeTask("build-gallery", {
      src: `${clientDir}/img-gallery/**`,
      dest: `${buildDir}/img/gallery/large`,
      base: `${clientDir}/img-gallery/`,
      rename: true,
      // https://github.com/scalableminds/gulp-image-resize
      resize: {
        width: 1200,
        height: 1200
      }
    });

    /* browser-syc */
    createBrowserSyncTask("build-browser-sync", {
      server: buildDir
    });


    const buildTasks = [
      "build-js",
      "build-css",
      "build-copy",
      "build-thumbnails",
      "build-gallery"
    ];

    if (quench.isWatching()){
      return runSequence(buildTasks, "build-browser-sync");
    }
    else {
      return runSequence(buildTasks);
    }

  };

};
