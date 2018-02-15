const gulp   = require("gulp");
const quench = require("./quench.js");
const debug  = require("gulp-debug");
const R      = require("ramda");
const imageResize = require("gulp-image-resize");
const Stream = require("stream");
const Path = require("path");
const sizeOf = require("image-size");
const gulpif = require("gulp-if");

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

    rename: false

    // see https://github.com/scalableminds/gulp-image-resize
    // resize: {
    //   width : 100,
    //   height : 100,
    //   crop : false,
    //   upscale : false
    // }
  }, userConfig);

  const { src, dest, base, watch, rename } = resizeConfig;

  if (!src || !dest || !base){
    quench.throwError(
      "Image Resize task requires src, dest, and base!\n",
      "The base needed to get the image dimensions\n",
      `Was given ${JSON.stringify(resizeConfig, null, 2)}`
    );
  }


  // resize files
  gulp.task(taskName, function(next) {
    return gulp.src(src, { base: base })
      .pipe(quench.drano())
      .pipe(imageResize(resizeConfig.resize))
      .pipe(gulpif(rename, renameWithImageSize()))
      .pipe(gulp.dest(dest))
      .pipe(debug({ title: `${taskName}:` }));
  });

  // run this task and watch if specified
  quench.maybeWatch(taskName, watch || src);

};


// this function was modified from
// https://github.com/hparra/gulp-rename/blob/master/index.js
function renameWithImageSize(obj) {

  var stream = new Stream.Transform({objectMode: true});

  function parsePath(path) {
    var extname = Path.extname(path);
    return {
      dirname: Path.dirname(path),
      basename: Path.basename(path, extname),
      extname: extname
    };
  }

  stream._transform = (originalFile, unused, callback) => {

    const file = originalFile.clone({contents: false});
    const parsedPath = parsePath(file.relative);

    // if this is a real file, not .. or .
    if (file.contents){
      const { height, width } = sizeOf(file.contents);
      const basename = parsedPath.basename + `-${width}x${height}`;
      file.path = Path.join(
        file.base,
        parsedPath.dirname,
        basename + parsedPath.extname
      );
    }

    // Rename sourcemap if present
    if (file.sourceMap) {
      file.sourceMap.file = file.relative;
    }

    callback(null, file);
  };

  return stream;
}
