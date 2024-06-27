//aqui vou criar minha bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;


function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(600,400);
}


function draw(){
    //aqui vou por a cor da "mesa"
    background(255,182,193);
    //chamando a função
    criaBolinha(xBolinha, yBolinha, tamBolinha);

}

//função bolinha
function criabolinha(xBolinha, yBolinha, tamBolinha){
    circle (xBolinha, yBolinha, tamBolinha);
}
