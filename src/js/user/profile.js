require('../common/aside.js');
require('../common/header.js');


//数据回显
$.ajax({
  url:'/v6/teacher/profile',
  type:'get',
  success:function(data){
    if(data.code == 200){
      $('.settings').html(template('settings-tpl',data.result));
    }
  }
});