require('../common/common.js');
require('../common/aside.js');
require('../common/header.js');
//添加讲师
$("#add-teacher-form").ajaxForm(function(data){
  if(data.code == 200){
    location.href = '/dist/html/teacher/list.html';
  }
});