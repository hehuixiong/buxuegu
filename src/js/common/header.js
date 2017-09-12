$("#btn-logout").on('click',function(){
  $.ajax({
    url:'/v6/logout',
    type:'post',
    success:function(result){
      if(result.code == 200){
        alert('退出成功');
        location.href = '/dist/html/user/login.html'
      }
    },
    error:function(){
      alert('服务器异常');
    }
    
  });
});

