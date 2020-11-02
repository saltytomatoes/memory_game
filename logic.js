
let body = document.body;



function Tile(number) {
    this.number = number;
    this.domref = document.createElement("div");
    this.domref.classList.toggle("tile");
    this.domref.innerText = number;
    this.selected = false;
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
    
    if(cols > 10 || cols < 3 || rows > 10 || rows < 3 || rows*cols % 2 != 0)
        alert(`rows and cols has to be between 3 and 10 and cols*rows has to be even.`);
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
        title.innerText = "select dimensions (3-10)";
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


// adds responsive design to the tiles.
function addTileDesign(tile) {
    tile.domref.style.lineHeight = tile.domref.offsetHeight + "px";
    tile.domref.style.fontSize = tile.domref.offsetHeight/2 + "px";
    tile.domref.addEventListener("click",()=>{
        
        let css = tile.domref.style;
        let hight = tile.domref.offsetHeight;

        if(tile.selected == false) {
            css.color = "black";
            css.boxShadow = `0 0 7px black,
                             inset 0 0 0px ${hight/100*3}px white,
                             inset 0 0 0px ${hight/100*6}px lime`;

            tile.selected = true;

        } else {
            css.color = "white";
            css.boxShadow = `0 0 7px black`;

            tile.selected = false;
        }
        
    });

}



function startGame(rows,cols) {

    //inits a matrix with tiles.
    function initMatrix(x,y) {

        let tiles = x * y / 2;
        let matrix = [];

        for(let i = 0; i < tiles; i++) {
            matrix.push( new Tile(i) );
            matrix.push( new Tile(i) );
        }

        return matrix;
    }

    // shuffles the board array.
    function arrayShuffle(array) {
    
        for(let i = 0; i < array.length; i++) {
            let rnd = Math.floor( Math.random() * array.length );
            let temp = array[i];
    
            array[i] = array[rnd];
            array[rnd] = temp;
        }
    
    }

    let Game = {
        "rows": rows,
        "cols": cols,
        "grid": document.createElement("div"),
        "matrix": initMatrix(rows,cols),
    }   

    arrayShuffle( Game["matrix"] );
    Game["grid"].setAttribute("id","mainGrid");
    Game["grid"].style.gridTemplateColumns = `repeat(${Game["cols"]}, 1fr)`;
    Game["grid"].style.gridTemplateRows = `repeat(${Game["rows"]}, 1fr)`;
    body.appendChild( Game["grid"] );


    Game["matrix"].forEach(tile => {
        Game["grid"].appendChild(tile.domref);
        addTileDesign(tile);
    });
}












function main() {
    menu();
}
main();