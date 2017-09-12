require('../common/aside.js');
require('../common/header.js');

//创建课程
$.post("/v6/course/create",{cs_name:$(".form-control").attr("data-name")});