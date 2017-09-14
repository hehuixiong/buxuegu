require('../common/common.js');
require('../common/aside.js');
require('../common/header.js');
var edit = require('../common/tool.js');//获取search

//获取页面中的id
var cg_id = edit.getSearch("cg_id");//传人的key是一个字符串
$.get('/v6/category/edit',{cg_id:cg_id},function(data){
  $(".edit-category-form").html(template("edit-category-tpl",data.result));
})

//确认学科修改
$("#edit-category-form").ajaxForm({
  delegation:true,
  success:function(data){
    if(data.code == 200){
      location.href = '/dist/html/category/list.html'
    }
  }
});