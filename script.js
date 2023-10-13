let celsius = parseInt(prompt("Ingresa la temperatura en grados Celsius (C):"));

function fahrenheit(){
  let temperatura =  (5/9)* celsius + 32;
    console.log("El resultado en grados Fahrenheit (f) es: ");
    return temperatura;
}

function kelvin (){
  let temperatura = celsius + 273.15;
    console.log("El resultado en grados Kelvin (k) es: ");
    return temperatura;
}
  
    console.log(fahrenheit());
    console.log(kelvin());  
  
}