new Vue({
  el: '#app',
  data: {
    current: new Date(),
    author: {
      name: '山田'
    }
  },

  created: function() {
    let that = this;
    this.timer = setInterval(function() {
      that.current = new Date();
    }, 1000);
  },

  mounted: function() {
    Vue.set(this.author, 'company', 'WINGSプロジェクト');
    console.log(this.$el.textContent.includes(this.author.company));

    let that = this;
    this.$nextTick().then(function() {
      console.log(that.$el.textContent.includes(that.author.company));
    })
  },

  beforeDestroy: function() {
    clearInterval(this.timer);
  }
})
