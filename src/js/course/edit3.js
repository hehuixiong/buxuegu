require('../common/common.js');
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
  $.get('/v6/course/chapter/edit',ct_id,function(data){
    $("#chapterModal").html(template('modal-edit-tpl',data.result));
  })
});

//修改编辑与添加模态框的数据
$("#course-edit3-form").ajaxForm({
  delegation:true,
  beforeSubmit:function(arrData){
    arrData.push({
      name:'ct_is_free',
      value:$("#ct_is_free").prop("checked")?1:0   //提交之前把选项修改
    })
  },
  success:function(data){
      location.href = '/dist/html/course/edit3.html?cs_id='+cs_id;
  }
});
// 编辑模态框数据回显--因为编辑与添加使用的是同一个模态框,所以回显的时候把数据清空
$(document).on("click","#course-edit3-add",function(){
    $("#chapterModal").html(template('modal-edit-tpl',{cs_id:cs_id}));
});