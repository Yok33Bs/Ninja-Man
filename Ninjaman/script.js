let world = [
    [1,1,1,1,1,1],
    [1,2,2,2,2,1],
    [1,2,1,1,2,1],
    [1,2,3,3,2,1],
    [1,2,1,1,2,1],
    [1,2,2,2,2,1],
    [1,1,1,1,1,1]
];
const worldDict = {
    0: "blank",
    1: "wall",
    2: "sushi",
    3: "onigiri"
};
let score = 0;

function drawWorld(){

    for(let row = 0; row < world.length; row++){
        const output=document.createElement('div');
        output.classList.add('row');
        for(var x = 0; x < world[row].length; x++){
            const block=document.createElement('div');
            block.classList.add(worldDict[world[row][x]])
            block.classList.add('worldDict')
        }
        document.querySelector('#world').appendChild(output);
    }
    document.querySelector('#score').textContent = `Score: ${score}`;
};
drawWorld();

let ninjaman = {
    x:1,
    y:1
}

function drawNinjaman() {
    document.getElementById('ninja').style.left = ninjaman.x*40 + "px"
    document.getElementById('ninja').style.top = ninjaman.y*40 + "px"
}

function upScore(element) {
    if(element == 2){
        score += 25
    }
    if(element == 3){
        score += 50
    }
}
drawNinjaman();
document.onkeydown = function(e){
    console.log(e);
    if(e.keyCode == 37){
        if(world[ninjaman.y][ninjaman.x-1] !=1){
            ninjaman.x--;
        }
    }
    if(e.keyCode == 39){
        if(world[ninjaman.y][ninjaman.x +1] !=1){
            ninjaman.x++;
        }
    }
    if(e.keyCode == 38){
        if(world[ninjaman.y-1][ninjaman.x] !=1){
            ninjaman.y--;
        }
    }
    if(e.keyCode == 40){
        if(world[ninjaman.y+1][ninjaman.x] !=1){
            ninjaman.y++;
        }
    }
    upScore(world[ninjaman.y][ninjaman.x]);
    world[ninjaman.y][ninjaman.x] = 0;
    drawNinjaman();
    drawWorld();
}