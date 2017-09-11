require('../common/aside.js');
require('../common/header.js');
//讲师列表展示
$.get("/v6/teacher",function(data){
  $("#tbody-teacher-list").html(template("teacher-list-tpl",data.result));
});

//查看讲师渲染

//????????????


//注销与启用讲师
$(document).on("click","#btn-teacher",function(){
  var $this = $(this);
  var data = {
    tc_id:$(this).attr('data-id'),
    tc_status:$(this).attr("data-status")
  };
  $.post("/v6/teacher/handle",data,function(data){
    var newStatus = data.result.tc_status;
    $this.text(newStatus==0?"注 销":"启 用");
    $this.attr('data-status',newStatus);
  })
})