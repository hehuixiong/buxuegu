// 导入各种包
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

// html处理
gulp.task('html', function () {
    gulp.src(['src/**/*.html', 'index.html'])
        .pipe(htmlmin({
            collapseWhitespace: true, // 去掉空白字符
            minifyJS: true, //压缩页面JS
            minifyCSS: true, //压缩页面CSS
            removeComments: true //清除HTML注释
        }))
        .pipe(gulp.dest('dist'));
});

// less处理
gulp.task('less', function () {
    gulp.src('src/less/index.less')
        .pipe(less())
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css'));
});

// 配置要打包的第三包路径
var jsLibs = [
    'node_modules/art-template/lib/template-web.js',
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/jquery-form/dist/jquery.form.min.js'
];
// 合并所有的第三方包为一个js
gulp.task('jsLib', function () {
    gulp.src(jsLibs)
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('dist/js'));
});

/* 
    打包CommonJs模块
    需要用循环来打包,因为browserify不认识通配符
*/
var jsModules = [
    //首页
    'src/js/index.js',
    //用户
    'src/js/user/login.js',
    'src/js/user/profile.js',
    'src/js/user/repass.js',
    //讲师
    'src/js/teacher/add.js',
    'src/js/teacher/edit.js',
    'src/js/teacher/list.js',
    //课程
    'src/js/course/edit1.js',
    'src/js/course/edit2.js',
    'src/js/course/edit3.js',
    'src/js/course/list.js',
    //学科分类
    'src/js/category/add.js',
    'src/js/category/edit.js',
    'src/js/category/list.js',
];

gulp.task('js', function () {
    jsModules.forEach(function (jsPath) {
        var pathArr = jsPath.split('/'); //返回结果是一个数组['src','js','index.js']
        var jsName = pathArr.pop();
        pathArr.shift();
        browserify(jsPath,{debug:true}).bundle()
            .pipe(source(jsName)) //必须加上这两个代码才能兼容gulp
            .pipe(buffer())
            // .pipe(uglify()) //压缩Js
            .pipe(gulp.dest('dist/' + pathArr.join('/')))
    });
});

//运行log全部跑一遍
gulp.task('log', function () {
    gulp.run(['html', 'less', 'js','jsLib']);
});
//运行gulp开始监听
gulp.task('default', function () {
    gulp.run('log')
    gulp.watch(['src/**/*.html', 'index.html'], function() {
        gulp.run('html');
    });
    gulp.watch(['src/**/*.less'], function() {
        gulp.run('less');
    });
    gulp.watch(['src/**/*.js'], function() {
        gulp.run('js');
    });
});