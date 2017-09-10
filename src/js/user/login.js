$('#login-form').ajaxForm({
  success: function (data) {
    if (data.code == 200) {
      alert('登录成功');
      //保存登录页面请求成功后返回的信息,通过JSON.stringify转换成字符串
      localStorage.setItem('userinfo', JSON.stringify(data.result));
      location.href = '/dist';
    } else {
      alert('登录失败');
    }

  },
  error: function () {
    alert('登录失败');
  }
});