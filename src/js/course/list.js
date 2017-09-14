require('../common/common.js');
require('../common/aside.js');
require('../common/header.js');

//课程列表数据渲染
$.get('/v6/course',function(data){
  $("#course-list").html(template("course-list-tpl",data.result));
})