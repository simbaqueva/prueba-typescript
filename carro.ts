
class Carro{
	public color: string;
	public modelo: string;
	public velocidad: number;


	constructor(modelo == null){
		this.color = "blanco";
		this.velocidad = 0;

		if(modelo == null){

			this.modelo = "BMW Generico";
		}else{
			this.modelo = modelo;
		 
       
	}
}

	public getModelo(){
		return this.modelo;
	}

	public setcolor(color: string){
     this.color = color;
	}
	public acelerar(){
		this.velocidad++;
	}
	public frenar(){
		this.velocidad--;
	}
	public getvelocidad():number{
     return this.velocidad;
	}
		}
}
//this:accede al valor de color 
//con set color podemos agregar un parametro y guardarlo en la propiedad color  la clase debe tener una diferencia en el nombre al de var 

var carro = new Carro();
var carro_dos = new Carro();
var carro_tres = new Carro();

carro.setcolor("rojo");
carro.acelerar();
carro.acelerar();
carro.acelerar();

console.log("el color del carro 1 es: "+carro.getcolor());
console.log("el color del carro 1 es: "+carro.getvelocidad());

carro.frenar();
console.log("el color del carro 1 es: "+carro.getvelocidad());

/*
carro.setcolor("rojo");
carro_dos.setcolor("azul");
carro_tres.setcolor("verde");

console.log("el color del carro 1 es:"+carro.getcolor());
console.log("el color del carro 2 es:"+carro_dos.getcolor());
console.log("el color del carro 3 es:"+carro_tres.getcolor());
*/


/*el atributo public  hace q se pueda manipular la clase desde cualquier lugar desde fuera de la clase 
 el atributo protected hace que la clase se pueda manipular unicamente desde donde se define  o sus herederos 
 el atributo private y unoicamente hace que la clase se pueda manipular unicamente desde la clase que la define*/
 