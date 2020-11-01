
let body = document.body;



function Tile(number) {
    this.number = number;
    this.domref = document.createElement("div");
    this.domref.classList.toggle("tile");
    this.domref.innerText = number;
}

// returns a flex input div.
function createInputDiv(description) {
    let inputdiv = document.createElement("div");
    inputdiv.classList.toggle("inputContainer");

    let text = document.createElement("h2");
    text.innerText = description;
    inputdiv.appendChild(text);

    let input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("name",description);
    inputdiv.appendChild(input);

    return inputdiv;
}


// start button click event.
function startClick() {
    
    let rows = document.querySelector(`input[name="rows"]`).value;
    let cols = document.querySelector(`input[name="cols"]`).value;
    
    if(cols > 20 || cols < 3 || rows > 20 || rows < 3 || rows*cols % 2 != 0)
        alert(`rows and cols has to be between 3 and 20 and cols*rows has to be even.`);
    else {
        clearBody();
        startGame(rows,cols);
    }
}


// clears the body from its childs
function clearBody() {
    body.innerHTML  = ``;
}


// menu screen
function menu() {

    let container = document.createElement("div");
    container.setAttribute("id","container");

        let title = document.createElement("h1");
        title.innerText = "select dimensions (3-20)";
        title.classList.toggle("title");
        container.appendChild(title);


        container.appendChild(createInputDiv("rows"));
        container.appendChild( createInputDiv("cols") );


        let startBtn = document.createElement("button");
        startBtn.innerText = "start!";
        startBtn.setAttribute("id","startBtn");
        startBtn.addEventListener("click",startClick);
        container.appendChild(startBtn);

    body.appendChild(container);
}



function startGame(rows,cols) {

    //inits a matrix with tiles
    function initMatrix(x,y) {

        let tiles = x * y / 2;
        let matrix = [];

        for(let i = 0; i < tiles; i++) {
            matrix.push( new Tile(i) );
            matrix.push( new Tile(i) );
        }

        return matrix;
    }


    let Game = {
        "rows": rows,
        "cols": cols,
        "grid": document.createElement("div"),
        "matrix": initMatrix(rows,cols),
    }   

    Game["grid"].setAttribute("id","mainGrid");
    Game["grid"].style.gridTemplateColumns = `repeat(${Game["cols"]}, 1fr)`;
    Game["grid"].style.gridTemplateRows = `repeat(${Game["rows"]}, 1fr)`;

    Game["matrix"].forEach(tile => {
        Game["grid"].appendChild(tile.domref);
    });



    body.appendChild(Game.grid);
    console.log(Game.grid);
}




// tile.domref.style.lineHeight = tile.domref.offsetHeight;










function main() {
    menu();
}
main();