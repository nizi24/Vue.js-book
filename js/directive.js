Vue.directive('highlight', function(el, binding, vnode, oldValue) {
  el.style.backgroundColor = binding.value;
});

new Vue({
  el: '#app',
  data: {
    color: 'yellow'
  }
});
