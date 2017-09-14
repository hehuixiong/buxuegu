require('../common/common.js');
require('../common/aside.js');
require('../common/header.js');
var tool = require('../common/tool.js');

//获取当前页面的cs_id,调用公共的获取search
var cs_id = tool.getSearch("cs_id");

//课程创建与课程编辑信息展示
$.get('/v6/course/basic', {
  cs_id: cs_id
}, function (data) {
  if (data.code == 200) {
    data.result.editIndex = 1;
    $('#course-edit1').append(template('course-edit1-tpl', data.result));
  }
});

//子级学科分类--二级联动--使用委托的方式绑定事件
$(document).on('change', "#select-form", function () {
  var cg_id = $(this).val();
  $.get("/v6/category/child", {
    cg_id: cg_id
  }, function (data) {
    var html = "";
    if (data.code == 200) {
      for (var i = 0; i < data.result.length; i++) {
        html += '<option value="' + data.result[i].cg_id + '">' + data.result[i].cg_name + '</option>'
      }
    }
    $("#form-control").html(html);
  })
});

/*
 *提交基础信息 
 * 1.数据是动态生成的,需要使用ajaxForm的委托插件
 */
$("#course-edit1-form").ajaxForm({
  delegation: true,
  success: function (data) {
    if (data.code == 200) {
      location.href = '/dist/html/course/edit2.html?cs_id='+cs_id;
    }
  }
});