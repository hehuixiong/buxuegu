require('../common/aside.js');
require('../common/header.js');
var tool = require('../common/tool.js');
var cs_id = tool.getSearch("cs_id");
//课程添加第三步动态渲染
$.get('/v6/course/lesson', {
  cs_id: cs_id
}, function (data) {
  if (data.code == 200) {
    data.result.editIndex = 3;
    $('#course-edit3').append(template('course-edit3-tpl', data.result));
  }
});


// 编辑模态框数据回显
$(document).on("click",".btn-lessons-edit",function(){
  var ct_id = {
    ct_id:$(this).attr('data-id')
  }
  $.get('/v6/course/chapter/edit',ct_id,function(){
    
  })
});