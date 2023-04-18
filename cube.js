
var cube = document.querySelector('.cube');
var scene = document.querySelector('.scene');

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    var sceneRect = scene.getBoundingClientRect();
    var sceneCenterX = sceneRect.left + sceneRect.width / 2;
    var sceneCenterY = sceneRect.top + sceneRect.height / 2;

    var rotateY = (x - sceneCenterX) / sceneCenterX * 180;
    var rotateX = (y - sceneCenterY) / sceneCenterY * -180;

    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
