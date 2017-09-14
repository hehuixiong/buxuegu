require('../common/common.js');
require('../common/aside.js');
require('../common/header.js');
var tool = require('../common/tool.js');
//获取当然页面的cs_id
var cs_id = tool.getSearch("cs_id");
//课程创建与课程编辑信息展示
$.get('/v6/course/picture', {
  cs_id: cs_id
}, function (data) {
  if (data.code == 200) {
    data.result.editIndex  = 2;
    $('#course-edit2').append(template('course-edit2-tpl', data.result));
  }
});

//上传封面图
