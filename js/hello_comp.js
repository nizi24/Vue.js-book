Vue.component('MyHello', {
  props: {
    yourName: {
      type: String,
      default: '名無し',
      validator: function(value) {
        return value.length <= 5;
      }
    }
  },
  template: `<div>こんにちは、{{ yourName }}さん</div>`,
  data: function() {
    return {
      name: 'Vue.js'
    }
  }
});

let MyName = {
  template: `<div>私は{{ name }}です</div>`,
  data: function() {
    return {
      name: 'Vue.js'
    }
  }
};

let MyCounter = {
  props: {
    init: Number
  },
  template: `<div>現在地は{{ current }}です!
    <input type="button" v-on:click="addCurrent" value="増やす">
    <input type="button" v-on:click="subCurrent" value="減らす"></div>`,
  data: function() {
    return {
      current: this.init
    };
  },
  methods: {
    addCurrent: function() {
      this.current++;
    },
    subCurrent: function() {
      if (this.current) {
        this.current--;
      }
    }
  }
}

new Vue({
  el: "#app",
  components: {
    'my-name': MyName,
    'my-counter': MyCounter
  }
});
