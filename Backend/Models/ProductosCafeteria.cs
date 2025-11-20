
namespace Models;

public class ProductosCafeteria
{
    public int ProductosCafeteriaId { get; set; }
    public string Nombre { get; set; }
    public string Categoria {get; set;}
    public string ImagenRuta {get; set;}
    public string Descripcion {get; set;}
    public decimal PrecioEuros {get; set;}


    public ProductosCafeteria(){}

    public ProductosCafeteria(int CafeteriaId, string Nombre, string Categoria, string ImagenRuta, string Descripcion, decimal PrecioEuros)
    {
        ProductosCafeteriaId = = CafeteriaId;
        Nombre = Nombre;
        Categoria = Categoria;
        ImagenRuta = ImagenRuta;
        Descripcion = Descripcion;
        PrecioEuros = PrecioEuros;
    }
}


