class Oscilador{
    constructor(x, y, periodo, desfase, r){
        this.x = x;
        this.y = y;
        this.desfase = desfase;
        this.r = r;
        this.velocidadAngular = TWO_PI/periodo;
    }

    dibujarFondo(){
        ellipseMode(CENTER);   
        strokeWeight(2);
        stroke(0);
        fill(255,150);
        ellipse( this.x,  this.y,  this.r*2,  this.r*2);
    }

    dibujarPendulo(x, y){
        fill(150);
        stroke(0);
        line(this.x,this.y, x+this.x, y+this.y);
        ellipse(x+this.x, y+this.y, 10, 10);
    }

    dibujarResorte(x, y){
        line(this.x+x, this.y, this.x+x, y+this.y)
        fill(100,10,10)
        ellipse(this.x+x, y+this.y, 10, 10);
    }

    dibujar(){
        angleMode(DEGREES);
        let y = this.r * sin(this.desfase);
        let x = this.r * cos(this.desfase);

        this.dibujarFondo();
        this.dibujarPendulo(x, y);
        this.dibujarResorte(0, y);

        textSize(25);
        text((y+this.r).toFixed(0) + " m", this.x+x-20, y+this.y-15)
        this.desfase +=this.velocidadAngular;
    }
}