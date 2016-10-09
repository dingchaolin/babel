var gulp = require('gulp');
var babel = require('gulp-babel');
gulp.task('babel', function(){
    //将src下的所有js文件编译输出到build中
    return gulp.src('src/*.js').pipe(babel()).pipe(gulp.dest('build'))
});

gulp.task('default',["babel"]);