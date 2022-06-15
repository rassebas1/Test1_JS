const gulp = require('gulp');
const server = require('gulp-server-livereload');
gulp.task('default', () => {
    console.log('Hello World');
})

gulp.task("serve", () => {
gulp.src(__dirname).pipe(server({
    livereload: true,
    open: true,
    defaultFile: "index.html"
    }));
});
