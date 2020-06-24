Vue.directive('highlight', function(el, binding, vnode, oldValue) {
  switch(binding.arg) {
    case 'color':
      el.style.backgroundColor = binding.value;
      break;
    case 'text':
      el.style.color = binding.value;
      el.addEventListener('mouseenter', function() {
        el.style.backgroundColor = 'green';
      }, false);
      el.addEventListener('mouseleave', function() {
        el.style.backgroundColor = '';
      }, false);
      break;
  }
});

new Vue({
  el: '#app',
  data: {
    color: 'yellow'
  }
});
