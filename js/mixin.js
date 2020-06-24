let dataLoggable = {
  data: function() {
    return {
      color: 'yellow'
    };
  },
  mounted: function() {
    console.log(this.$data);
  },
  directives: {
    bgColor: function(el, binding) {
      el.style.backgroundColor = binding.value;
    }
  }
};

let MyComp = {
  data: function() {
    return {
      current: new Date()
    };
  },
  template: `<div v-bgColor="color">現在時刻: {{ current }}</div>`,
  mixins: [ dataLoggable ]
};

new Vue({
  el: '#app',
  components: {
    'my-comp': MyComp
  }
});
