// 
class Ropa{

    // Propriedades

    public color: String;
    public marca: String;
    public talla: String;
    public precio: Number;

    // Métodos

    public setColor(color){
        this.color = color;
    }

    public getColor(color){
        return this.color;
    }
 
}
var camiseta = new Ropa();
camiseta.setColor("Rojo")