const gulp   = require("gulp");
const quench = require("./quench.js");
const debug  = require("gulp-debug");
const R      = require("ramda");
const imageResize = require("gulp-image-resize");

// !!! this task requires imagemagick!
// !!! https://www.imagemagick.org

module.exports = function resizeTask(taskName, userConfig) {

  const resizeConfig = R.merge({
    /**
     * src       : glob of files to resize
     * dest      : destination folder
     * base      : *optional https://github.com/gulpjs/gulp/blob/master/docs/API.md#optionsbase
     * watch     : files to watch that will trigger a rerun when changed
     */

    // see https://github.com/scalableminds/gulp-image-resize
    // resize: {
    //   width : 100,
    //   height : 100,
    //   crop : false,
    //   upscale : false
    // }
  }, userConfig);

  const { src, dest, base, watch } = resizeConfig;

  if (!src || !dest){
    quench.throwError(
      "Image Resize task requires src and dest!\n",
      `Was given ${JSON.stringify(resizeConfig, null, 2)}`
    );
  }


  // resize files
  gulp.task(taskName, function(next) {
    return gulp.src(src, { base: base })
      .pipe(quench.drano())
      .pipe(imageResize(resizeConfig.resize))
      .pipe(gulp.dest(dest))
      .pipe(debug({ title: `${taskName}:` }));
  });

  // run this task and watch if specified
  quench.maybeWatch(taskName, watch || src);

};
