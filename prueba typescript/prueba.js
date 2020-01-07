var Vehicle;
(function (Vehicle) {
    var car = (function () {
        function car() {
        }
        car.prototype.getProperties = function () {
            return "numheels: 4,  fueltype: oil";
        };
        return car;
    }());
    Vehicle.car = car;
})(Vehicle || (Vehicle = {}));
(function (Vehicle) {
    var motorclycle = (function () {
        function motorclycle() {
        }
        motorclycle.prototype.getProperties = function () {
            return "Numheels: 2, fueltype:  gasoline";
        };
        return motorclycle;
    }());
    Vehicle.motorclycle = motorclycle;
})(Vehicle || (Vehicle = {}));
var vehicle = Vehicle;
var car = new vehicle.car();
console.log("car: " + car.getProperties());
var motorclycle = new vehicle.motorclycle();
console.log("Motoeclycle: " + motorclycle.getProperties());
//  enum Color{
//  	red = 1,
//  	green = 2,
//  	blue = 4
//  }
//  module Color {
// export function mixColor(colorName: string) {
// 	if (colorName == "yellow") {
// 		return Color.red + Color.green;
// 	}
// 	else if (colorName == "white"){
// 		return Color.red + Color.green + Color.blue;
// 	}
// 	else if (colorName == "cyan"){
// 		return Color.green + Color.blue;
// 	}
//  }
// }
// import color = Color;
// console.log(color.mixColor("cyan"));
// // sin lambda
// var  names = ["piera", "Martorell", "Manresa", "Igualada", "Cornella"];
// var station = {
// 	randomStation: function()
// 	{
// 		return function() {
// 			console.log(this);
// 			var rand = this.names[Math.floor(Math.random() * this.names.length)];
// 			return { random : rand };
// 		}
// 	}
// }
// var newStation = station.randomStation() ();
// console.log("station: " + newStation.random);
// //con lambda
// var station = {
// 	names: ["Piera", "Martorell", "Igualdad", "Cornella"],
// 	randomStation: function()
// 	{
// 		//esta es la clave
// 		return()  => {
// 			console.log(this);
// 			var rand = this.names[Math.floor(Math.random() * this.names.length)];
// 		     return { random : rand };
// 		 }
// 	}
// }
// var newStation = station.randomStation() () ;
// console.log("station: " + newStation.random);
// let someArray = [1, "string", false];
// for (let entry of someArray) {
//     console.log(entry); // 1, "string", false
// }
// let list = [4, 5, 6];
// for (let i in list) {
//    console.log(i); // "0", "1", "2",
// }
// var sports = ['soccer', 'baseball'];
// var total = sports.push('football', 'swimming');
// console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
// console.log(total);  // 4 
