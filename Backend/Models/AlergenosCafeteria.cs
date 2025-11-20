using Models;

public class AlergenosProductosCafeteria

{
    public int AlergenoId {get; set;}
    public int ProductoId {get; set;}

    public ProductosCafeteria? Producto {get; set;}
    public string Alergeno {get; set;}


}