require('../common/aside.js');
require('../common/header.js');
//引入三级联动
var initPCD = require('../common/tool.js');

//用户上传图片
// function initUploadify(){
//   $("#upfile").uploadify({
//     swf:'/node_modules/jquery-uploadify/uploadify.swf',
//     uploader:'/v6/uploader/avatar',
//     fileTypeExts:'*.gif;*.jpg;*.png'
//   });
// }

//数据回显
$.ajax({
  url: '/v6/teacher/profile',
  type: 'get',
  success: function (data) {
    if (data.code == 200) {
      $('.settings').html(template('settings-tpl', data.result));
      //调用三级联动
      initPCD.initPCD();
      //调用用户上传图片
      // initUploadify();
    }
  }
});

//提交表单
$('#profile-form').ajaxForm({
  delegation: true,
  delegation: true,
  success: function (data) {
    if (data.code == 200) {
      location.href = '/dist'
    }
  }
})


$("#upfile").on("change",function(){
  alert("你好")
})