var temperaturas_ciudades = new Array(new Array (12,10,11), new Array(5,0,2),new Array(10,8,10));
console.log(temperaturas_ciudades);

document.write("<table width=200 border=1 cellpadding=1 cellspacing=1>");
for (i=0;i<temperaturas_ciudades.length;i++){
 document.write("<tr>");
 document.write("<td><b>Ciudad " + i + "</b></td>");

 for (j=0;j<temperaturas_ciudades[i].length;j++){
 document.write("<td>" + temperaturas_ciudades[i][j] + "</td>");
 }
 document.write("</tr>");
}
document.write("</table>");

var nombres=["Juan", "José", "Carlos", "Paola"];
console.log(nombres);

nombres.forEach(function(nomb, index){
document.write("</br>"+(index+1)+" " +nomb);
})