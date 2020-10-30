
let body = document.body;



function menu() {

    let container = document.createElement("div");
    container.setAttribute("id","container");

        let title = document.createElement("h1");
        title.innerText = "select dimensions (3-20)";
        title.classList.toggle("title");
        container.appendChild(title);


        let rowstxt = document.createElement("h2");
        rowstxt.innerText = `rows`;
        container.appendChild(rowstxt);



        let startBtn = document.createElement("button");
        startBtn.innerText = "start!";
        startBtn.setAttribute("id","startBtn");
        container.appendChild(startBtn);

    body.appendChild(container);
}


function main() {
    menu();
}
main();