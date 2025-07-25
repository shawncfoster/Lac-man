const initialBoard = [["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
["x","o","o","o","o","o","o","o","o","o","x","x","o","o","o","o","o","o","o","o","P","x"],
["x","o","x","x","x","o","x","x","x","o","x","x","o","x","x","x","o","x","x","x","o","x"],
["x","o","x","x","x","o","x","x","x","o","x","x","o","x","x","x","o","x","x","x","o","x"],
["x","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","x"],
["x","o","x","x","o","x","x","o","x","x","x","x","x","x","o","x","x","o","x","x","o","x"],
["x","o","x","x","o","x","x","o","x","x","x","x","x","x","o","x","x","o","x","x","o","x"],
["x","o","o","o","o","x","x","o","o","o","x","x","o","o","o","x","x","o","o","o","o","x"],
["x","x","x","x","o","x","x","x","x","o","x","x","o","x","x","x","x","o","x","x","x","x"],
["x","x","x","x","o","x","x","x","x","o","x","x","o","x","x","x","x","o","x","x","x","x"],
["x","x","x","x","o","x","x","o","o","o","o","o","o","o","o","x","x","o","x","x","x","x"],
["x","x","x","x","o","x","x","o","g","g","g","g","g","g","o","x","x","o","x","x","x","x"],
["x","x","x","x","o","x","x","o","g","g","g","g","g","g","o","x","x","o","x","x","x","x"],
["o","o","o","o","o","o","o","o","g","g","g","g","g","g","o","o","o","o","o","o","o","o"],
["x","x","x","x","o","x","x","o","g","g","g","g","g","g","o","x","x","o","x","x","x","x"],
["x","x","x","x","o","x","x","o","g","g","g","g","g","g","o","x","x","o","x","x","x","x"],
["x","x","x","x","o","x","x","o","g","g","g","g","g","g","o","x","x","o","x","x","x","x"],
["x","x","x","x","o","x","x","o","o","o","o","o","o","o","o","x","x","o","x","x","x","x"],
["x","x","x","x","o","x","x","o","x","x","x","x","x","x","o","x","x","o","x","x","x","x"],
["x","o","o","o","o","x","x","o","x","x","x","x","x","x","o","x","x","o","o","o","o","x"],
["x","o","x","x","o","o","o","o","o","o","x","x","o","o","o","o","o","o","x","x","o","x"],
["x","o","x","x","o","x","x","x","x","o","x","x","o","x","x","x","x","o","x","x","o","x"],
["x","o","x","x","o","x","x","x","x","o","x","x","o","x","x","x","x","o","x","x","o","x"],
["o","o","x","x","o","o","o","o","o","o","o","o","o","o","o","o","o","o","x","x","o","o"],
["x","o","x","x","o","x","o","x","x","x","x","x","x","x","x","o","x","o","x","x","o","x"],
["x","o","o","x","o","x","o","x","x","x","x","x","x","x","x","o","x","o","x","o","o","x"],
["x","x","o","x","o","x","o","o","o","o","x","x","o","o","o","o","x","o","x","o","x","x"],
["x","x","o","x","o","x","o","x","x","o","x","x","o","x","x","o","x","o","x","o","x","x"],
["x","x","o","x","o","x","o","x","x","o","x","x","o","x","x","o","x","o","x","o","x","x"],
["x","x","o","x","o","x","o","x","x","o","o","o","o","x","x","o","x","o","x","o","x","x"],
["x","o","o","o","o","x","o","o","o","o","x","x","o","o","o","o","x","o","o","o","o","x"],
["x","o","x","x","x","x","x","x","x","o","x","x","o","x","x","x","x","x","x","x","o","x"],
["x","o","x","x","x","x","x","x","x","o","x","x","o","x","x","x","x","x","x","x","o","x"],
["x","o","x","x","x","x","x","x","x","o","x","x","o","x","x","x","x","x","x","x","o","x"],
["x","o","x","x","x","x","x","x","x","o","x","x","o","x","x","x","x","x","x","x","o","x"],
["x","P","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","P","x"],
["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"]]

//code snippet 1
nrow = initialBoard.length;
ncol = initialBoard[0].length;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const squareWidth = 100;
const squareHeight = 50;
canvas.width = squareWidth * ncol;
canvas.height = squareHeight * nrow;

//code snippet two
class gridSquare{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    drawPlaySpace(color){
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, squareWidth, squareHeight);
    }
    drawPellet(size){
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(this.x + (squareWidth / 2), this.y + (squareHeight / 2), size, 0, 2 * Math.PI);
        ctx.fill();
    }
}

class gameBoard{
    constructor(board){
        this.board = JSON.parse(JSON.stringify(board));
        this.grid = [];
    }

    // it might would be better "seperation of concerns" to have the "check win" and "fill screen"
    //tasks as separate functions. But then I'd have to loop through the whole screen twice per frame
    fillScreen(){
        let xPoint = 1;
        let yPoint = 1;
        let winFlag = true;
        for(const row of this.board){
            xPoint = 1;
            let rowGrid = []
            for(const cell of row){
                let square = new gridSquare(xPoint, yPoint);
                rowGrid.push(square)
                if(cell == "x"){
                    square.drawPlaySpace("blue");
                }
                else{
                    square.drawPlaySpace("black");
                    if(cell == "P"){
                        square.drawPellet(20);
                        winFlag = false;
                    }
                    else if(cell == "o"){
                        square.drawPellet(10);
                        winFlag = false;
                    }
                }
                xPoint += squareWidth;
        }
        this.grid.push(rowGrid)
        yPoint +=squareHeight;
        }
        if(winFlag == true){
            this.board = JSON.parse(JSON.stringify(initialBoard));
        }
        }
        
    check(lacs, ghosts, home = {x: 13, y: 10}){
        switch (this.board[lacs.yCord][lacs.xCord]){
            case "o":
                this.board[lacs.yCord][lacs.xCord] = "e";
                this.grid[lacs.yCord][lacs.xCord].drawPlaySpace("black"); 
                break;
            case "P":
                this.board[lacs.yCord][lacs.xCord] = "e";
                ghosts.forEach((x)=>x.flee());
                break;
        }
        //every frame dawg
        //wait a minute. This passes the old lac by REFERENCE. I just realized how insane that is
        //OOP is whack
        for (const ghost of ghosts){
            if(lacs.yCord === ghost.yCord && lacs.xCord === ghost.xCord){
                if (ghost.color === "#66ff00"){
                    ghost.xCord = home.x;
                    ghost.yCord = home.y;
            }else if (lacs.lives > 0){
                lacs.yCord = 1;
                lacs.xCord = 1;
                lacs.lives -= 1;
            } else {
                lacs.yCord = 1;
                lacs.xCord = 1;
                this.board = JSON.parse(JSON.stringify(initialBoard))
                lacs.lives = 3;
            }
            }
        }
    }
}

class sprite{
    constructor(xCord, yCord, size, color, boardGrid){
        this.xCord = xCord;
        this.yCord = yCord;
        this.size = size;
        this.color = color;
        this.boardGrid = boardGrid
    }
   
    move(x,y){
        if(this.boardGrid.board[y][x] != "x"){
            if( x == this.boardGrid.grid[this.yCord].length){
                this.move(0, y);
            } else if (x == -1) {
                this.move(this.boardGrid.grid[this.yCord].length - 1, y);
            }
            else{
                this.yCord = y;
                this.xCord = x;
            }
        }
    }
    //do repeat myself on "draw" here
    draw(size){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.boardGrid.grid[this.yCord][this.xCord].x + (squareWidth/2),
        this.boardGrid.grid[this.yCord][this.xCord].y +
        (squareHeight/2), size, 0, 2 * Math.PI);
        ctx.fill();
    }
    }

class lacMan extends sprite {
    constructor(xCord, yCord, size, color, boardGrid, lives = 3){
        super(xCord, yCord, size, color, boardGrid);
        this.lives = lives;

        window.addEventListener("keydown", (e) => {
            switch (e.key) {
              case "a":
                    if(this.xCord != 0){
                        this.move(this.xCord - 1, this.yCord);
                    }
                    else{
                        this.move(this.boardGrid.grid[this.yCord].length - 1, this.yCord)
                    }
                    break;
              case "d":
                    if(this.xCord != this.boardGrid.grid[this.yCord].length - 1){
                        this.move(this.xCord + 1, this.yCord);
                    }
                    else{
                        this.move(0, this.yCord);
                    }
                break;
                case "w":
                    if(this.yCord != 0){
                        this.move(this.xCord, this.yCord - 1);
                    }
                    else{
                        this.move(this.xCord, this.boardGrid.grid.length - 1);
                    }
                break;
                case "s":
                    if(this.yCord != (this.boardGrid.grid.length - 1)){
                        this.move(this.xCord, this.yCord + 1);
                    }
                    else{
                        this.move(this.xCord,0)
                    }
                break;
            }
          });
    }
}

class Ghost extends sprite{
    constructor(xCord, yCord, size, color, boardGrid, clock = 0, dir = "right"){
        super(xCord, yCord, size, color, boardGrid);
        this.clock = clock;
        this.dir = dir;
        this.baseColor = color;
    }

    predictMove(){
        let possibleMoves = []
        
        let straight = this.boardGrid.board[this.yCord + this.turn(this.dir).y]
        [this.xCord + this.turn(this.dir).x];
        
        if (straight != "x"){
            possibleMoves.push(this.dir);
        }

        if(this.dir == "left" || this.dir == "right"){
            if (this.boardGrid.board[this.yCord + this.turn("up").y]
            [this.xCord + this.turn("up").x] != "x"){
                possibleMoves.push("up");
            }

            if (this.boardGrid.board[this.yCord + this.turn("down").y]
            [this.xCord + this.turn("down").x] != "x"){
                possibleMoves.push("down");
            }
        }
        
        if(this.dir == "up" || this.dir == "down"){
            if (this.boardGrid.board[this.yCord + this.turn("left").y]
            [this.xCord + this.turn("left").x] != "x"){
                possibleMoves.push("left");
            }

            if (this.boardGrid.board[this.yCord + this.turn("right").y]
            [this.xCord + this.turn("right").x] != "x"){
                possibleMoves.push("right");
            }
        }
        return (possibleMoves[(this.randomNumber(0, possibleMoves.length - 1))])
    }

    randomNumber(min,max){
        return Math.floor(Math.random() * (max - (min) + 1)) + min
    }

    turn(direction){
        switch(direction){
            case "left":
                return({x: -1, y: 0});
            case "right":
                return({x: 1, y: 0});
            case "down":
                return({x: 0, y: 1});
            case "up":
                return({x: 0, y: -1});
            default:
                return({x: 0, y: 0});
        }
    }

    updatePosition(){
        this.clock += 400;
        if(this.clock >= 6000){
            this.dir = this.predictMove();
            let nextSquare = this.turn(this.dir);
            this.move(this.xCord + nextSquare.x, this.yCord + nextSquare.y);
            this.clock = 0
        }
    }

    flee(){
        this.color = "#66ff00";
        //gonna need a timeout
        setTimeout(() => {
            this.color = this.baseColor;
        }, 10000);
    }
}
//begin set up
const screen = new gameBoard(initialBoard);
const lac = new lacMan(1, 1, 25, "yellow", screen);
const inky = new Ghost(15,13, 25, "cyan", screen, 0, "right");
const pinky = new Ghost(6,13, 25, "magenta", screen, 0, "left");
const blinky = new Ghost(7,18, 25, "red", screen, 0, "down");
const clyde = new Ghost(14,18, 25, "orange", screen, 0, "down");

screen.fillScreen();
lac.draw(lac.size);

const ghosts = [inky, pinky, blinky, clyde];
ghosts.forEach((x) => {x.draw(x.size)})

let isPlaying = true;

function loop() {
if(isPlaying){
        screen.fillScreen();
        screen.check(lac, ghosts);
        lac.draw(lac.size);
        
        for (const ghost of ghosts){
            ghost.updatePosition();
            ghost.draw(ghost.size)
        }
        requestAnimationFrame(loop);
}
}

window.addEventListener('keydown', function (e){
    if (e.key === "Escape"){
        if(isPlaying){
            isPlaying = false;

        }else{
            isPlaying = true;
            loop()
        }
    }
})
loop();