require('../common/common.js');
require('../common/aside.js');
require('../common/header.js');

//修改密码
$('.form-horizontal').on('submit',function(){
  if($("#pass-word").val() != $("#new-pass-word").val()){
    alert('密码不一致,请重新输入');
    return false;
  }
  $('.form-horizontal').ajaxSubmit({
    success:function(data){
      console.log(data)
    }
  });
  return false;
})