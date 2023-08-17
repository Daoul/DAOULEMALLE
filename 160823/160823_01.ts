console.log("Hola, TypeScript")

// let mivariable = "Esto es una cadena de cáracteres"
// let mivariable2 = 5

// console.log(mivariable)
// console.log(typeof mivariable2)
let minumero: number = 0
let mivariable: string = "Hola"
if (minumero == 10 && mivariable == "Hola"){
    console.log("El valor es 10")
}else if(minumero == 11 || mivariable == "Hola"){
    console.log("El valor es 11")
}else{
    console.log("El valor no es 10 ni 11")
}

function mifunction(): string{
    return "Mi Function"
}
console.log(mifunction())

// List

let miLista: Array<string>= ["miNombre", "miApellido", "miPagina"]
console.log(miLista)

// El objecto Set le permite almacenar valores únicos de cualqier tipo

let miSet: Set<string> = new Set(["miNombre", "miApellido", "miPagina"])
miSet.add("36")
console.log(miSet)

// Map ..Estructura de datos de par de valores clave

let miMapa: Map<string, number> = new Map([["Manuel", 54], ["Javier", 19]])
miMapa.set("Miguel", 39)
console.log(miMapa)
console.log(miMapa.get("javier"))

// Bucles

for (const value of miLista){
    console.log(value)
}

let contador = 0
while(contador < miLista.length){
    console.log(miLista[contador])
    contador++
}

// Clases
class MiClase{
    nombre: string
    edad: number

    constructor(nombre: string, edad: number){
        this.nombre = nombre
        this.edad = edad
    }
}
let miClase: MiClase = new MiClase("Javier", 19)
console.log(miClase)
    console.log(miClase.nombre)