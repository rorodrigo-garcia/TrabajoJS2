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



alert ("Con tu compra tenes una remera de regalo sorpresa")

 
// aca defini el prompt que da paso al resto
 let utilidades  = prompt ("Para seleccionarla tenes que poner el numero de la remera junto a la palabra remera")
 
//aca defini una funcion 
function remeras (remera ,talle , color , ){
    this.remera = remera;
    this.talle = talle;
    this.color =color;
    
}
//aca defini cada uno de los objetos a disposicion
const remera1 = new remeras ("batman", "L" , "negra" );
const remera2 = new remeras ("Flash" , "L" , "rojo" );
const remera3 = new remeras ("hulk" , "L" , "verde"  );
const remera4 = new remeras ("thor" , "L" , "Amarillo");
const remera5 = new remeras ("superman" , "L" , "azul");   



//aca utilice el array for of para que el usuario vea de que remera era cada una de las opciones
for (const todasLasRemeras of utilidades){
    alert ("La primera remera era de " + (remera1.remera))
    break
}
for (const todasLasRemeras of utilidades){
    alert ("la segunda remera era de " + (remera2.remera))
    break
}
for (const TodasLasRemeras of utilidades){
    alert ("La tercera remera era de " + (remera3.remera))
    break
}
for (const TodasLasRemeras of utilidades){
    alert ("La cuarta remera era de " + (remera4.remera))
    break
}
for (const TodasLasRemeras of utilidades){
    alert ("La quinta remera era de " + (remera5.remera))
    break
}

//y aca volvi a utilizar el ciclo if para que el usuario vea los datos del objeto seleccionado
if (utilidades.toLowerCase() == "remera1"){
    alert("tu remera sorpresa es " + (remera1.talle) + (",")+  ( remera1.color) + (",") + (remera1.remera))    
}
else if (utilidades.toLocaleLowerCase() == "remera2")
{
    alert ("tu remera sorpresa es " +(remera2.talle) + (",")+ ( remera2.color)+(",") + (remera2.remera))
}
else if (utilidades.toLocaleLowerCase() == "remera3")
{
    alert ("tu remera sorpresa es " +(remera3.talle)+(",") +  ( remera3.color)+(",") + (remera3.remera))
}
else if (utilidades.toLocaleLowerCase() == "remera4")
{
    alert ("tu remera sorpresa es " +(remera4.talle) +(",")+  ( remera4.color)+(",") + (remera4.remera))
}
else if (utilidades.toLocaleLowerCase() == "remera5")
{
    alert ("tu remera sorpresa eseleccionaste " +(remera5.talle)+(",") +  ( remera5.color)+(",") + (remera5.remera))
}

else {
    alert("lo siento,perdiste tu remera")
} 



    




