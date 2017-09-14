require('../common/common.js');
require('../common/aside.js');
require('../common/header.js');
//创建课程
$("#course-add-form").ajaxForm(function(data){
  if(data.code == 200){
    location.href = '/dist/html/course/edit1.html?cs_id='+data.result.cs_id;
  }
});