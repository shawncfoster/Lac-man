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


nrow = initialBoard.length;
ncol = initialBoard[0].length;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const squareWidth = 100;
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
    //"test": 2;
}

class gameBoard{
    constructor(board){
        this.board = JSON.parse(JSON.stringify(board));
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
    // it might would be better "seperation of concerns" to have the "check win" and "fill screen"
    //tasks as separate functions. But then I'd have to loop through the whole screen twice per frame
    fillScreen(){
        let xPoint = 1;
        let yPoint = 1;
        let winFlag = true;
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
                        winFlag = false;
                    }
                    else if(cell == "o"){
                        square.drawPellet(10);
                        winFlag = false;
                    }
                }
                xPoint += squareWidth;
        }
        yPoint +=squareHeight;
        }
        if(winFlag == true){
            this.board = JSON.parse(JSON.stringify(initialBoard));
        }
        }
    check(pacs, ghosts, home = {x: 13, y: 10}){
            switch (this.board[pacs.yCord][pacs.xCord]){
                case "o":
                   this.board[pacs.yCord][pacs.xCord] = "e";
                   this.grid[pacs.yCord][pacs.xCord].drawPlaySpace(); 
                   break;
                case "P":
                    this.board[pacs.yCord][pacs.xCord] = "e";
                    ghosts.forEach((x)=>x.flee());
                    break;
            }
            //every frame dawg
            //wait a minute. This passes the old pac by VALUE. I just realized how insane that is
            //OOP is whack
            for (const ghost of ghosts){
                if(pacs.yCord === ghost.yCord && pacs.xCord === ghost.xCord){
                    if (ghost.color === "#66ff00"){
                        ghost.xCord = home.x;
                        ghost.yCord = home.y;
                }else if (pacs.lives > 0){
                    pacs.yCord = 1;
                    pacs.xCord = 1;
                    pacs.lives -= 1;
                } else {
                    pacs.yCord = 1;
                    pacs.xCord = 1;
                    this.board = JSON.parse(JSON.stringify(initialBoard))
                    pacs.lives = 3;
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

//lump together so I stop mutating state for global variables/objects that have nothing to do with each other

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
ghosts.forEach((x) => {x.draw(x.size)})

let isPlaying = true;

function loop() {
if(isPlaying){
        screen.fillScreen();
        screen.check(pac, ghosts);
        pac.draw(pac.size);
        
        for (const ghost of ghosts){
            ghost.updatePosition(screen.board)
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

