var button = document.getElementById('btn');
var body = document.body;

var colors = ['blue'];

button.addEventListener('click',changeBackground);

function changeBackground(){
    var colorsIndex = Math.floor(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorsIndex]
};

