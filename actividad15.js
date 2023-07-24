var nombres;
console.log(nombres);
nombres = new Array(5);
console.log(nombres);
nombres = [" Juan ", " Jose ", " Manuel ", " Carlos ", " Ana "]


document.write(nombres);
for (let i=0; i<nombres.length; i++){
    document.write("</br>" + nombres[i] + i);
}