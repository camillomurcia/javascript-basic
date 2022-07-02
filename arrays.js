var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);
console.log(frutas.length); //4
console.log(frutas[0]); //Manzana

frutas.push("Uvas") //Agregar nuevo elemento en el array al final

console.log(frutas[4]); //Uvas 

frutas.pop("Uvas"); // Eliminar elemento

frutas.unshift("Banano"); //Agrega nuevo elemento en el Array al inicio del Array

frutas.shift("Banano"); //Elimina el primer elemento

frutas.indexOf("Cereza") //Obtener posicion del elemento en el Array