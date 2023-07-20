// var a = parseInt(prompt("El primer número: " ));
// var b = Number(prompt("El segundo número: "));
//     console.log(a);
//     console.log(b);

//     console.log(a+b);
//     document.write(a+b + "<br/>");
//     document.write(a-b + "<br/>");
//     document.write(a*b + "<br/>");
//     document.write(a/b + "<br/>");

// Actividad2: Correction de Manuel
// var a = Number(prompt("Introduce el primer número"));
// console.log("El primer número es " + a);
// var b = Number(prompt("Introduce el segundo número"));
// console.log("El segundo número es " + b);

// document.write("Sumar: " + (a+b) + "<br/>");
// document.write("Restar: " + (a-b) + "<br/>");
// document.write("Multiplicar: " + (a*b) + "<br/>");
// document.write("Dividir: " + (a/b) + "<br/>");

function calcular(){

    var num1 = Number(document.getElementById("numero1").value);
    var num2 = Number(document.getElementById("numero2").value);
    sumar = num1 + num2;
    restar = num1 - num2;
    multiplicar = num1 * num2;
    dividir = num1 / num2;
    document.getElementById("sumar").innerHTML="Sumar: " + sumar;
    document.getElementById("restar").innerHTML="Restar: " + restar;
    document.getElementById("multiplicar").innerHTML="multiplicar: " + multiplicar;
    document.getElementById("dividir").innerHTML="dividir: " + dividir;
    
}