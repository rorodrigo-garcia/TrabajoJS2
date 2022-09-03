// utilizar 5 prompt para dar a elegir entre precios de batman,flash, hulk , thor y superman
//al elegir uno utilizo el alert para avisarle al usuario cuanto es el valor del comic a seleccionar
//utilizando function en el console.log muestro que selecciono 

let comic = prompt("Ingrese el nombre del personaje que este interesado por su comic : Batman , flash , hulk , thor o superman")
let batman = 100
let flash = 200 
let hulk = 300
let thor = 400
let superman = 500
if (comic.toLowerCase() == "batman" ){
    alert ( "el precio del comic es " + batman)
}
else if (comic.toLowerCase() == "flash"){
    alert ("el precio del comic es " + flash)
}
else if (comic.toLowerCase() == "hulk"){
    alert ( `el precio del comic es   ${hulk} `)
}
else if (comic.toLowerCase ()== "thor"){
    alert ("el precio del comic es " + thor)
}
else if (comic.toLowerCase() == "superman"){
    alert("el precio del comic es " + superman)
}
else {  
alert("lo sentimos no selecciono ninguno")
}

function mostrar (mensaje){
    console.log (mensaje)
}
 mostrar (comic)


