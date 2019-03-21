// 1 =<div class='wall'></div>
// 3 =<div class='ground'></div>
// 2 =<div class='coin'></div>
// 5 =<div class='pacman'></div>
var map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 2, 2, 1, 1, 5, 1, 1, 2, 2, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

]

var pacman = {
    x: 6,
    y: 4
}
var score = 0;
var factor = 10;

// console.log(document);

function drawWorld() {
    document.getElementById('world').innerHTML = "";
    for (var y = 0; y < map.length; y = y + 1) {
        // console.log(map[y])
        for (var x = 0; x < map[y].length; x = x + 1) {
            // console.log(map[y][x])
            if (map[y][x] === 1) {

                document.getElementById('world').innerHTML += "<div class='wall'></div>";
            }
            else if (map[y][x] === 2) {

                document.getElementById('world').innerHTML += "<div class='coin'></div>";
            }
            else if (map[y][x] === 3) {

                document.getElementById('world').innerHTML += "<div class='ground'></div>";
            }
            else if (map[y][x] === 5) {

                document.getElementById('world').innerHTML += "<div class='pacman'></div>";
            }
        }

        document.getElementById('world').innerHTML += "<br>";

    }

    //score is updated
    document.getElementById('score').innerText = score;

}

function addScore(pacman) {
  if (pacman === 2) {
    score += factor;
  }
}

document.onkeydown = function (e) {
    // console.log(e.keyCode);
    if (e.keyCode === 37) {
        // left
        if (map[pacman.y][pacman.x - 1] !== 1) {
            addScore(map[pacman.y][pacman.x - 1]);
            map[pacman.y][pacman.x] = 3;
            pacman.x = pacman.x - 1;
            map[pacman.y][pacman.x] = 5;

            drawWorld();
        }

    }
    else if (e.keyCode === 38) {
        // up
        if (map[pacman.y - 1][pacman.x] !== 1) {
            addScore(map[pacman.y - 1][pacman.x]);
            map[pacman.y][pacman.x] = 3;
            pacman.y = pacman.y - 1;
            map[pacman.y][pacman.x] = 5;

            drawWorld();
        }
    }
    else if (e.keyCode === 39) {
        // right
        if (map[pacman.y][pacman.x + 1] !== 1) {
            addScore(map[pacman.y][pacman.x + 1]);
            map[pacman.y][pacman.x] = 3;
            pacman.x = pacman.x + 1;
            map[pacman.y][pacman.x] = 5;

            drawWorld();
        }
    }
    else if (e.keyCode === 40) {
        // down
        if (map[pacman.y + 1][pacman.x] !== 1) {
            addScore(map[pacman.y + 1][pacman.x]);
            map[pacman.y][pacman.x] = 3;
            pacman.y = pacman.y + 1;
            map[pacman.y][pacman.x] = 5;

            drawWorld();


        }
    }

}

drawWorld();



