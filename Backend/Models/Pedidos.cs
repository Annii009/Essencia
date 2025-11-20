public class Pedidos
{
    public int PedidoId { get; set;}
    public int MesaId { get; set; }
    public DateTime FechaHoraPedido { get; set; }
    public bool PedidoCompletado {get; set;}
    public decimal Total {get; set;}
    public string Notas {get; set;}
}