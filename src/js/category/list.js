require('../common/common.js');
require('../common/aside.js');
require('../common/header.js');
//学科列表数据渲染

$.get('/v6/category',function(data){
  $(".table-bordered").append(template("category-list-tpl",data.result));
})