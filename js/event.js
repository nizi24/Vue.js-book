new Vue({
  el: "#app",
  data: {
    message: ''
  },
  methods: {
    onclick: function() {
      this.message = new Date().toLocaleString();
    },
    welcome: function(message, e) {
      console.log(message);
      console.log(e);
    }
  }
})
