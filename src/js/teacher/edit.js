require('../common/common.js');
require('../common/aside.js');
require('../common/header.js');
var edit = require('../common/tool.js');
//编辑讲师动态渲染
//获取当然页面的id
var tc_id = edit.getSearch("tc_id");
$.get('/v6/teacher/edit',{tc_id:tc_id},function(data){
  $(".teacher-edit-form").html(template('edit-teacher-tpl',data.result));
})

//确认修改讲师
$("#teacher-edit-form").ajaxForm({
  delegation:true,
  success:function(data){
    if(data.code == 200){
      location.href = '/dist/html/teacher/list.html';
    }
  }
});