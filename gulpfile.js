var gulp        = require('gulp'),
    sass        = require('gulp-ruby-sass'),
    notify      = require('gulp-notify'),
    gulpWatch   = require('gulp-watch'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence');

gulp.task('sass-compile', function() {
    return sass('./style/sass/main.scss',{style: 'expanded'})
    .on('error',function(){
        console.error
    })

    .pipe(gulp.dest('./style/css'))
    .pipe(notify({message: 'task completed'}));
    
});

gulp.task('watch', ['sass-compile'],function(){
    browserSync.reload();
});

gulp.task('server',function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
});

gulp.watch('./style/sass/**/*.scss', ['watch']);
gulp.watch('./**/*.html',browserSync.reload);

// gulp.task('default', ['sass-compile', 'watch', 'server']);
