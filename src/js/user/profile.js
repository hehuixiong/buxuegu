require('../common/aside.js');
require('../common/header.js');


//数据回显
$.ajax({
  url:'/v6/teacher/profile',
  type:'get',
  success:function(data){
    console.log(data)
    if(data.code == 200){
      $('.settings').html(template('settings-tpl',data.result));
      
    }
  }
});

//提交表单
$('#profile-form').ajaxForm({
  delegation:true,
  delegation:true,
  success:function(data){
    if(data.code == 200){
      alert("修改成功");
      location.href = '/dist'
    }
  }
})