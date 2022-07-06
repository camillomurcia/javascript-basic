var miAuto = {
    marca: "Toyota",
    modelo: "Corrolla",
    annio: 2020
};

miAuto.marca //Obtener valor x


 var miAuto2 = {
    marca: "Toyota",
    modelo: "Corrolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log("Auto " + this.modelo + " " + this.annio)
    }
};