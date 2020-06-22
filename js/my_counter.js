let MyCounter = {
  props: {
    step: Number
  },
  template: `<div><button type="button" v-on:click="onclick">
    {{ step }}</button>
    <slot name="example"></slot>
    <slot></slot></div>`,
  methods: {
    onclick: function() {
      this.$emit('plus', this.step);
    }
  }
};

new Vue({
  components: {
    'my-counter': MyCounter
  },
  el: '#app',
  data: {
    current: 0
  },
  methods: {
    onplus: function(e) {
      this.current += e;
    }
  }
});
