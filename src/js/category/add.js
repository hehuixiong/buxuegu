require('../common/aside.js');
require('../common/header.js');

//动态渲染顶级分类
$.get('/v6/category/top',function(data){
  $("#category-top-form").html(template('category-top-tlp',data.result));
})

//添加学科
$('#category-add-form').ajaxForm(function(data){
  if(data.code == 200){
    location.href = '/dist/html/category/list.html';
  }
});