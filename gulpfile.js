var gulp = require('gulp');
var server = require('gulp-webserver');
var url = require('url');
var fs = require('fs');
var path = require('path');
var data = require('./data/data.json');
gulp.task('devServer', function() {
    return gulp.src('src')
        .pipe(server({
            port: 9090,
            host: '169.254.163.44',
            //livereload:true
            middleware: function(req, res, next) {
                //拦截前端请求
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/api/list') {
                    //请求接口
                    res.end(JSON.stringify({ code: 1, data: data }));
                } else {
                    //请求文件
                    pathname = pathname === '/' ? 'index.html' : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
                }
            }
        }))
})