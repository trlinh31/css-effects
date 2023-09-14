const container = document.getElementById('container');
const blurList = ['0', '5px'];
const colorList = ['#d63031', '#6c5ce7', '#0984e3', '#fab1a0', '#00b894'];
const widthClient = document.documentElement.clientWidth;
const heightClient = document.documentElement.clientHeight;
const count = 80;
function createRain() {
  for (var i = 0; i < count; i++) {
    var randomLeft = Math.floor(Math.random() * widthClient);
    var randomTop = Math.floor(Math.random() * heightClient);
    var color = Math.floor(Math.random() * 3);
    var width = Math.floor(Math.random() * 5 + 5);
    var blur = Math.floor(Math.random() * 3);
    var time = Math.floor(Math.random() * 5 + 5);

    var div = document.createElement('div');
    container.appendChild(div);
    div.style.backgroundColor = colorList[color];
    div.style.width = width + 'px';
    div.style.height = width + 'px';
    div.style.position = 'absolute';
    div.style.marginTop = randomTop + 'px';
    div.style.marginLeft = randomLeft + 'px';
    div.style.borderRadius = '50%';
    div.style.filter = 'blur(' + blurList[blur] + ')';
    div.style.animation = `fall ${time}s ease-in infinite`;
  }
}
createRain();
