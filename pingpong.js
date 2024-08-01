//aqui vou criar minha bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;
let raioBolinha = tamBolinha/2;

let xvelocidadeBolinha = 6;
let yvelocidadeBolinha = 6;

let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(600,400);
}


function draw(){
    //aqui vou por a cor da "mesa"
    background(255,182,193);
    //chamando a função
    criaBolinha(xBolinha, yBolinha, tamBolinha);
    movimentabolinha();
    bolinhaBorda();
    criaRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
    movimentaRaquete();
    colideRaquete();

}

//função bolinha
function criabolinha(xBolinha, yBolinha, tamBolinha){
    fill("red");
    circle (xBolinha, yBolinha, tamBolinha);
}

function movimentabolinha() {

    xBolinha = xvelocidadeBolinha + xBolinha;
    yBolinha = yvelocidadeBolinha + yBolinha;

}

function bolinhaBorda() {
        if (xBolinha > widtgh  ||  xBolinha < 0){
        xvelocidadeBolinha  *=  -1;
}

if (yBolinha > height  ||  yBolinha < 0){
    yvelocidadeBolinha *= -1;
}
}
function criaRaquete (xRaquete, yRaquete, larguraRaquete, alturaRaquete) {
    Fill("blue");
    Rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
}
function movimentaRaquete() {

    if(keyIsDown(UP_ARROW)){
        yRaquete -= 10;
    }
    if(KEYISDOWN(DOWN_ARROW)){
        yRaquete += 10;
    }
}
function colideRaquete(){

    if(xBolinha - raioBolinha < xRaquete + larguraRaquete && yBolinha -
        raioBolinha < yRaquete + alturaRaquete && yBolinha +raioBolinha > yRaquete
    ) {
        xvelocidadeBolinha *= -1;
    }
}
