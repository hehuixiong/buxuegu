require('../common/aside.js');
require('../common/header.js');
var tool = require('../common/tool.js');

var cs_id = tool.getSearch("cs_id");

//课程创建与课程编辑信息展示
$.get('/v6/course/basic', {
  cs_id: cs_id
}, function (data) {
  if (data.code == 200) {
    data.result.editIndex  = 1;
    $('#course-edit1').append(template('course-edit1-tpl', data.result));
  }
});