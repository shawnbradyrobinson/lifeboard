const anime = require('animejs');
var hello = document.getElementById('hello');
anime({
    targets: hello,
    translateX: 250,
    rotate: '1turn',
    backgroundColor: '#FFF',
    duration: 800
  });

