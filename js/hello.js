let app = new Vue({
  el: '#app',
  data: {
    message: '皆さん、こんにちは！',
    url: 'https://wings.msn.to/',
    email: 'ExamplE@test.com'
  },
  computed: {
    localEmail: function() {
      return this.email.split('@')[0].toLowerCase();
    }
  }
});
