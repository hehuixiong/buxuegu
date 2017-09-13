var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');//压缩html
var less = require('gulp-less');//less转换为css
var uglify = require('gulp-uglify');//压缩js
var rename = require('gulp-rename');//修改后缀名
var cleanCss = require('gulp-clean-css');//压缩css
var concat = require('gulp-concat');//合并文件
var browserify = require('browserify');//browserify插件,目的是可以在浏览器上运行
var source = require('vinyl-source-stream');//配合browserify插件使用
var buffer = require('vinyl-buffer');//配合browserify使用
var htmlReplace = require('gulp-html-replace');
//less处理
gulp.task('less',function(){
  gulp.src('src/less/*.less') //选择路径---读
  .pipe(less()) //经过less处理
  .pipe(cleanCss())
  .pipe(gulp.dest('dist/css')) //最后知道路径---写
});

//html处理
gulp.task('html',function(){
  gulp.src(['src/**/*.html','index.html'])
  .pipe(htmlReplace({
    style:gulp.src('src/html/common/style.html'),
    aside:gulp.src('src/html/common/aside.html'),
    header:gulp.src('src/html/common/header.html'),
    loading:gulp.src('src/html/common/loading.html'),
    courseEditHeader:gulp.src('src/html/common/course/header.html'),
    courseEditAside:gulp.src('src/html/common/course/aside.html'),
  }))
  .pipe(htmlmin({
    minifyCSS:true,
    minifyJS:true,
    collapseWhitespace:true,
    removeComments:true
  }))
  .pipe(gulp.dest('dist'))
});

//处理第三方js包
var jsLibs = [
  'node_modules/jquery/dist/jquery.js',
  'node_modules/art-template/lib/template-web.js',
  'node_modules/bootstrap/dist/js/bootstrap.js',
  'node_modules/jquery-form/dist/jquery.form.min.js',
  'node_modules/nprogress/nprogress.js',
  'node_modules/jquery-region/jquery.region.js',
  'node_modules/jquery-uploadify/jquery.uploadify.js'
];

gulp.task('jsLib',function(){
  gulp.src(jsLibs)
  .pipe(concat('lib.js'))
  .pipe(gulp.dest('dist/js'));
});

//自己的js处理

var jsModules = [
  //indexjs
  'src//js/index.js',
  //学科分类
  'src/js/category/add.js',
  'src/js/category/edit.js',
  'src/js/category/list.js',
  //科目
  'src/js/course/add.js',
  'src/js/course/edit1.js',
  'src/js/course/edit2.js',
  'src/js/course/edit3.js',
  'src/js/course/list.js',
  //讲师
  'src/js/teacher/add.js',
  'src/js/teacher/edit.js',
  'src/js/teacher/list.js',
  //用户
  'src/js/user/login.js',
  'src/js/user/profile.js',
  'src/js/user/repass.js',
];


gulp.task('js',function(){
  jsModules.forEach(function(jsPath){
    var pathArr = jsPath.split('/');
    var jsName = pathArr.pop();
    pathArr.shift();
    browserify(jsPath,{debug:true}).bundle()
    .pipe(source(jsName))
    .pipe(buffer())
    .pipe(gulp.dest('dist/'+pathArr.join('/')));
  });
});

//运行log全部跑一遍
gulp.task('log',function(){
  gulp.run(['html','less','js','jsLib']);
})

//添加监听
gulp.task('default',function(){
  gulp.run('log')
  gulp.watch(['src/**/*.html','index.html'],function(){
    gulp.run('html');
  })
  gulp.watch('src/less/*.js',function(){
    gulp.run('less');
  })
  gulp.watch('src/**/*.js',function(){
    gulp.run('js');
  })
});