require('../common/common.js');
//头像展示
var userinfo = JSON.parse(localStorage.getItem('userinfo')) || {};
var tc_avatar = userinfo.tc_avatar || '/public/img/default.png';
$(".avatar img").attr('src',tc_avatar);

$('#login-form').ajaxForm({
  success: function (data) {
    if (data.code == 200) {
      alert("登录成功")
      //保存登录页面请求成功后返回的信息,通过JSON.stringify转换成字符串
      localStorage.setItem('userinfo', JSON.stringify(data.result));
      location.href = '/dist';
    }
  }
});