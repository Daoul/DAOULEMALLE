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
    // var num3 = prompt("Numero 3");

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

    // innerHTML=`<h2>Sección de la actividad2 </h2>
    // <label for="numero1">Introduce el primer número</label>
    // <input type="number" id="numero1" name="numero1">

    // <label for="numero2">Introduce el segundo número</label>
    // <input type="number" id="numero2" name="numero2">
    
    // <button onclick="calcular()">Calcular</button>
    // <br>
    // <h3 id="sumar"><br>Sumar:</h3>
    // <h3 id="restar"><br>Restar:</h3>
    // <h3 id="multiplicar"><br>Multiplicar:</h3>
    // <h3 id="dividir"><br>Dividir:</h3>
    // <br>`
    
}