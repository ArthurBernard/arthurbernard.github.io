
var cube = document.querySelector('.cube');
var scene = document.querySelector('.scene');

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    var sceneRect = scene.getBoundingClientRect();
    var sceneCenterX = sceneRect.left + sceneRect.width / 2;
    var sceneCenterY = sceneRect.top + sceneRect.height / 2;

    var rotateY = (x - sceneCenterX) / sceneCenterX * 15;
    var rotateX = (y - sceneCenterY) / sceneCenterY * -15;

    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});


/*document.addEventListener('scroll', (event) => {
    var rotateY = Math.random() * 360;
    var rotateX = Math.random() * -360;

    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});*/

document.addEventListener('scroll', (event) => {
    var rotateY = cube.style.transform.rotateX + 30;
    var rotateX = cube.style.transform.rotateY - 30;

    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

