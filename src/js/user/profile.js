require('../common/common.js');
require('../common/aside.js');
require('../common/header.js');

//用户上传图片
// function initUploadify(){
//   $("#upfile").uploadify({
//     swf:'/node_modules/jquery-uploadify/uploadify.swf',
//     uploader:'/v6/uploader/avatar',
//     fileTypeExts:'*.gif;*.jpg;*.png'
//   });
// }


//省市县三级联动
function initPCD() {
  $("#region-container").region({
    url: '/node_modules/jquery-region/region.json'
  })
}

//个人中心数据回显
$.ajax({
  url: '/v6/teacher/profile',
  type: 'get',
  success: function (data) {
    if (data.code == 200) {
      $('.settings').html(template('settings-tpl', data.result));
      //调用三级联动
      initPCD();
      //调用用户上传图片
      // initUploadify();
      //调用日期插件
      initPlugin();
    }
  }
});

//提交表单-使用ajaxForm插件完成
$('#profile-form').ajaxForm({
  delegation: true,
  success: function (data) {
    if (data.code == 200) {
      location.href = '/dist'
    }
  }
})

//选择日期插件
function initPlugin(){
  $("input[name=tc_birthday]").datepicker({
    language:'zh-CN',  //转换为中文显示
    format:'yyyy-mm-dd', //时间格式
    endDate:new Date("2017-09-14"),  //选时间最大的值
    autoclose:true,  //选择完毕之后自动关闭选框
  });
  $("input[name=tc_join_date]").datepicker({
    language:'zh-CN',
    format:'yyyy-mm-dd',
    autoclose:true,
    endDate:new Date("2017-09-14")
  });
}