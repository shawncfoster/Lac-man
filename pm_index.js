initialBoard = [["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
["x","P","o","o","o","o","o","o","o","o","x","x","o","o","o","o","o","o","o","o","P","x"],
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

nrow = initialBoard.length;
ncol = initialBoard[0].length;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const squareWidth = 50;
const squareHeight = 50;

const width = (canvas.width = squareWidth * ncol);
const height = (canvas.height = squareHeight * nrow);


class gridSquare{
    constructor(x, y){
        this.x = x;
        this.y = y;
        //this.squareKind = squareKind;
    }
    drawWall(){
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y,  squareWidth, squareHeight);
    }
    drawPlaySpace(){
        ctx.fillStyle = "black";
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
        this.board = board;
        this.grid = [];
    }
    
    initializeGrid(){
        let yVal = 1;
        let xVal = 1;
        for(const row of this.board){
            xVal = 1;
            let rowGrid = [];
            for(const cell of row){
                rowGrid.push(new gridSquare(xVal, yVal));
                xVal += squareWidth;
            }
            this.grid.push(rowGrid);
            yVal += squareHeight;
        }

    }

    fillScreen(){
        let xPoint = 1;
        let yPoint = 1;
        for(const row of this.board){
            xPoint = 1;
            for(const cell of row){
                let square = new gridSquare(xPoint, yPoint);// probably a way to avoid repeating this... make grid and board into a single object?
                if(cell == "x"){
                    square.drawWall();
                }
                else{
                    square.drawPlaySpace();
                    if(cell == "P"){
                        square.drawPellet(20);
                    }
                    else if(cell == "o"){
                        square.drawPellet(10);
                    }
                }
                xPoint += squareWidth;
        }
        yPoint +=squareHeight;
        }
        }

        check(pacs){
            if(this.board[pacs.yCord][pacs.xCord] === "o"){
                this.board[pacs.yCord][pacs.xCord] = "e";
                this.grid[pacs.yCord][pacs.xCord].drawPlaySpace();
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
    
    draw(size){
        ctx.beginPath();
        ctx.fillStyle = this.color;

        ctx.arc(this.boardGrid.grid[this.yCord][this.xCord].x + (squareWidth/2),
        this.boardGrid.grid[this.yCord][this.xCord].y +
        (squareHeight/2), size, 0, 2 * Math.PI);
        
        ctx.fill();
    }
    }

class pacMan extends sprite {
    constructor(xCord, yCord, size, color, boardGrid){
        super(xCord, yCord, size, color, boardGrid);

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
}

//stop refilling grid on every call


//lump together so I stop mutating state for global variables/objects that have nothing to do with each other
class gameState {
    constructor(board, grid, characters){
        this.board = board;
        this.grid = grid;
        this.characters = characters;
    }
    update(){
        this.board.fillScreen();
        this.characters.updateCharacters();
    }
}
const screen = new gameBoard(initialBoard);
const pac = new pacMan(1, 1, 25, "yellow", screen);
const inky = new Ghost(15,13, 25, "cyan", screen, 0, "right");
const pinky = new Ghost(6,13, 25, "magenta", screen, 0, "left");
const blinky = new Ghost(7,18, 25, "red", screen, 0, "down");
const clyde = new Ghost(14,18, 25, "orange", screen, 0, "down");

screen.fillScreen();
screen.initializeGrid();
pac.draw(pac.size);

const ghosts = [inky, pinky, blinky, clyde];
//ghosts.forEach((x) => {x.draw(x.size)})
for (ghost in ghosts){
ghost.draw(ghost.size)
}

let isPlaying = true;

function loop() {
if(isPlaying){
        screen.fillScreen();
        screen.check(pac);
        pac.draw(pac.size);
        
        //setTimeout(blinky.updatePosition(), 1200);
        //this is almost definitely slower, but IDT it'll matter
        ghosts.forEach((x) => {x.updatePosition(screen.board)});
        ghosts.forEach((x) => {x.draw(x.size)});
        
        requestAnimationFrame(loop);
    //} 
}
}
window.addEventListener('keydown', function (e){
    if (e.key === "Escape"){
        if(isPlaying){
            isPlaying = false;

        }else{
            isPlaying = true;
            console.log("in else")
            loop()
            console.log("past nested loop")
        }
    }
})

loop();
console.log("past first loop")





