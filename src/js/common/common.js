//进度条与工具条
NProgress.start();
window.onload = function(){
  NProgress.done();
}
$(document).ajaxStart(function () {
  $(".overlay").show()

});
$(document).ajaxStop(function () {
  $(".overlay").hide()
})

/**
 * 登录权限效验
 * 1.我们先在前端拿到本地的cookie,看看其中有没有PHPSESSID这一项
 *  有:就认为用户已经登录
 *  没有:认为用户未登录
 * 2.通过location.pathname判断用户是否在登录页面,还是其他页面
 * 3.登录页面已登录,跳转到首页,其他页面未登录,跳转到登录页
 */

//获取cookie使用插件完成
var isLogin = !!$.cookie("PHPSESSID");
//获取当前页面的路径
var isLoginPage = location.pathname == '/dist/html/user/login.html';
//判断用户是否已经登录
if (isLogin && isLoginPage) {
  location.href = '/dist';
}
//判断用户是否未登录
else if(!isLogin && !isLoginPage){
  location.href = '/dist/html/user/login.html';
}
