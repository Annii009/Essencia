public class ProductosFloristeria
{
    public int FloristeriaId { get; set; }
    public string Nombre { get; set; }
    public string ImagenRuta {get; set;}
    public string Detalle {get; set;}
    public string DescripcionCuidados {get; set;}
    public decimal PrecioEuros {get; set;}

    public ProductosFloristeria(){}

    public ProductosFloristeria(int FloristeriaId, string Nombre, string ImagenRuta, string Detalle, string DescripcionCuidados, decimal PrecioEuros)
    {
        FloristeriaId = FloristeriaId;
        Nombre = Nombre;
        ImagenRuta = ImagenRuta;
        Detalle = Detalle;
        DescripcionCuidados = DescripcionCuidados;
        PrecioEuros = PrecioEuros;
    }
}