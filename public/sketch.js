let senoSlider;
let radioSlider;
let o;
let seno;

let xCirculo = 200;
let yCirculo = 200;
let periodo = 5;
let desfase = 0;
let radio = 100;
let distancia = 200;


function setup(){
    createCanvas(1800, 400);
    senoSlider = createSlider(1, 20, 5);
    radioSlider = createSlider(10, 180, 150);
    o = new Oscilador(xCirculo, yCirculo, periodo, desfase, radio);
    seno = new Seno(xCirculo + radio + distancia, 
                    yCirculo - radio, 
                    width-distancia/2, 
                    yCirculo + radio, 
                    desfase, periodo);
}

function draw(){
    background(180);
    let vAngular = TWO_PI/senoSlider.value();
    o.r = radioSlider.value();
    seno.reajustarBordesY(yCirculo, radioSlider.value());
    o.velocidadAngular = vAngular;
    seno.velocidadAngular = vAngular;
    o.dibujar();
    seno.dibujar();
}