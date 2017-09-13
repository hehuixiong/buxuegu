//获取登录页面存储的信息,获取到的是字符串
var userinfoStr = localStorage.getItem('userinfo');
//把字符串通过JSON.parse转换成对象再使用
var userinfo = JSON.parse(userinfoStr);
$('.aside img').attr('src', userinfo.tc_avatar || "/public/img/default.png"); //attr使用  第一个属性是字符串告诉它设置什么属性,第二个是一个对象
$(".aside h4").text(userinfo.tc_name); //设置文本

//点击显示隐藏子菜单
$('.navs').on('click', 'a', function () {
  $(this).next('ul').slideToggle(200);
})

//获取当前页面的路劲
var path = location.pathname;
//先将所有的active移除
$('.navs a').removeClass('active');
//选择器进行匹配,如果href的值等于当前的路劲,就加上active
$('.navs a[href="' + path + '"]').addClass('active').parents('ul').show();


//进度条与工具条
NProgress.start();
NProgress.done();
$(document).ajaxStart(function () {
  $(".overlay").show()
});
$(document).ajaxStop(function () {
  $(".overlay").hide()
})