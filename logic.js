
let body = document.body;


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


function startClick() {
    
    let rows = document.querySelector(`input[name="rows"]`).value;
    let cols = document.querySelector(`input[name="cols"]`).value;
    
    if(cols > 20 || cols < 3 || rows > 20 || rows < 3 || rows*cols % 2 != 0)
        alert(`rows and cols has to be between 3 and 20 and cols*rows has to be even.`);
}



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


function main() {
    menu();
}
main();