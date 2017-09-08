$('#login-form').ajaxForm({
  success: function (retult) {
    if (retult.code == 200) {
      alert('登录成功');
      location.href = '/dist';
    } else {
      alert('登录失败');
    }
  },
  error: function () {
    alert('登录失败');  
  }
});