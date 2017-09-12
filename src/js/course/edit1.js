require('../common/aside.js');
require('../common/header.js');

//课程基本信息展示
$.get("/v6/course/basic",{cs_id:$("#data-id").attr("data-id")},function(data){
  
});