function pulsar(){
    var arr=[];
    // arr=document.formulario.miarea.value.split(" ");
    arr=document.getElementById("miarea").value.split(" ");
    var n_palabras=arr.length;
    var p_palabras=arr[0];
    var u_palabras=arr[arr.length-1];
    document.getElementById("resultado").innerHTML="Numero de palabras "  +n_palabras+ "</br> Premera palabra "
    +p_palabras + "</br> Últuma palabra " +u_palabras;
    
      
}
