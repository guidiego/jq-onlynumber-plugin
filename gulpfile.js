var gulp   = require("gulp"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify");

gulp.task("build", function () {
  return gulp.src("./jquery.onlynumbers.1-0.js")
          .pipe(uglify())
          .pipe(rename("jquery.onlynumbers.1-0.min.js"))
          .pipe(gulp.dest("./"));
});

gulp.task("default", ["build"], function () {
  gulp.watch("./**/*", ["build"]);
});
