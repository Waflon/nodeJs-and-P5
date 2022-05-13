
class Seno{
    constructor(bordeX, bordeY, finalX, finalY, desfase, periodo){
        this.bordeX = bordeX;
        this.finalX = finalX;
        this.finalY = finalY;
        this.bordeY = bordeY;
        this.velocidadAngular = TWO_PI/periodo;
        this.altura = (finalY- bordeY) / 2;
        this.start = desfase;
    }

    dibujarBordes(){
        strokeWeight(3);
        line(this.bordeX, this.bordeY, this.bordeX, this.finalY);
        line(this.finalX, this.bordeY, this.finalX, this.finalY);
        line(this.bordeX, this.bordeY, this.finalX, this.bordeY);
        line(this.bordeX, this.finalY, this.finalX, this.finalY);     
    }

    reajustarBordesY(yCirculo, radio){
        this.bordeY = yCirculo - radio;
        this.finalY = yCirculo + radio;
        this.altura = (this.finalY - this.bordeY) / 2 ;
    }

    dibujar(){
        this.incremento = senoSlider.value()/500;
        stroke(0);
        noFill();
        let xoff = this.start;
        this.dibujarBordes();
        strokeWeight(1);
        beginShape();
        for (let x = this.bordeX; x < this.finalX; x++){
            strokeWeight(5);
            stroke(155, 255);
            let y = this.bordeY + (this.altura + sin(xoff) * this.altura);
            vertex(x, y);
            xoff += this.velocidadAngular;   
        }
        endShape();
        this.start += this.velocidadAngular;
    }
}

