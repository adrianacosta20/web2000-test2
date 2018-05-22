export default function () {
    var upPressed = 0;
    var downPressed = 0;
    var leftPressed = 0;
    var rightPressed = 0;


    function keyDown(playerKeyPress) {
        var keyPressed = playerKeyPress.which;
        if (keyPressed == 38)
            upPressed = 1;
        if (keyPressed == 40)
            downPressed = 1;
        if (keyPressed == 37)
            leftPressed = 1;
        if (keyPressed == 39)
            rightPressed = 1;
    }

    function keyUp(playerKeyPress) {
        var keyPressed = playerKeyPress.which;
        if (keyPressed == 38)
            upPressed = 0;
        if (keyPressed == 40)
            downPressed = 0;
        if (keyPressed == 37)
            leftPressed = 0;
        if (keyPressed == 39)
            rightPressed = 0;
    }
};