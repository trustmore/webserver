var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var exec = require('child_process').exec;
var livereload = require('gulp-livereload');

var production = process.env.NODE_ENV === 'production';

gulp.task('dev', function () {
    nodemon({
        script: 'server.js',
        ext: 'js html',
        env: {
            'NODE_ENV': 'development'
        }
    }).on('restart', function () {
        console.log('restarted!')
    }).on('crash', function() {
        console.error('Application has crashed!\n')
        stream.emit('restart', 10)  // restart the server in 10 seconds 
    })
});
/*
gulp.task('start', function () {
  nodemon({ script: 'server.js'})
    .on('restart', function () {
      console.log('restarted!')
    })

  var stream = nodemon({ script: 'server.js'
          , ext: 'html js'
          , ignore: ['ignored.js']
          , tasks: ['lint'] })
 
  stream
      .on('restart', function () {
        console.log('restarted!')
      })
      .on('crash', function() {
        console.error('Application has crashed!\n')
         stream.emit('restart', 10)  // restart the server in 10 seconds 
      })
});
*/
/*
gulp.task('start', function () {
    exec('node server.js', function (err, stdout, stderr) {
        console.log('====restart====', err, stdout, stderr);
    });
});
*/
/*
gulp.task('watch', function() {
  gulp.watch('views/*.html', ['start']);
});

gulp.task('dev', ['watch']);
*/