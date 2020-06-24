let MyInput = {
  props: [ 'value' ],
  template: `<label>名前：
    <input type="text" :value="value"
    @input="$emit('input', $event.target.value)" />
    </label>`
}

new Vue({
  el: "#app",
  components: {
    'my-input': MyInput
  },
  data: {
    message: ''
  }
});
