new Vue({
  el: "#app",
  data: {
    options: {
      size: 20,
      maxlength: 14,
      required: true
    },
    color: {
      backgroundColor: 'Aqua',
      color: 'Red'
    },
    size: {
      fontSize: '1.4em'
    },
    colorClass: 'color',
    isChange: true,
    key: '',
    pos: {
      top: '',
      left: ''
    },
    show: false
  },
  methods: {
    keyEvent: function() {
      this.key = 'エンターを押しています。';
    },
    keyEv: function() {
      this.key = 'エンターは押されていません。';
    },
    help: function() {
      alert('漢字で入力してください。');
    },
    onClickLeft: function() {
      this.show = false;
    },
    onClickRight: function(e) {
      this.pos.top = e.pageY + 'px';
      this.pos.left = e.pageX + 'px';
      this.show = true;
    }
  }
})
