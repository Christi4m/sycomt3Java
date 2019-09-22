package classes;

public class Ventas {
    
    private int id;
    private int item;
    private int idCliente;
    private int idProducto;
    private int idDetalleVenta;   
    private String numSerie;
    private String nameProducto;
    private String fechaVenta;
    private Double valorGlobal;
    private Double cantidadProducto;
    private Double subTotal;
    private Double valorProducto;
    private String estado;
    private int idMensajero;
    private int idFactura;
    private String mes;
    private String ventasMes;

    
    private String detallesProducto;

    public Ventas() {
    }
    //constructor para reporte ventas mes
    public Ventas(String mes, String ventasMes) {
        this.mes = mes;
        this.ventasMes = ventasMes;
    }
    
    
    // constructor para guardar los detelle de cada venta
    public Ventas(int idDetalleVenta, int idProducto, String nameProducto, String detallesProducto, Double cantidadProducto, Double valorProducto){
        this.idDetalleVenta=idDetalleVenta;
        this.idProducto=idProducto;
        this.nameProducto=nameProducto;
        this.detallesProducto=detallesProducto;
        this.cantidadProducto=cantidadProducto;
        this.valorProducto=valorProducto;        
    }
    //constructor para guardar la venta en la bd
    public Ventas(String fechaVenta, Double valorGlobal, int idCliente, String numSerie, String estado) {
        
        this.idCliente = idCliente;
        this.numSerie = numSerie;
        this.fechaVenta = fechaVenta;
        this.valorGlobal = valorGlobal;
        this.estado = estado;
    }
    //constructor para traer los detalles de la venta
    public Ventas(int id,int idProducto, Double cantidadProducto, Double valorProducto){
        this.id = id;
        this.idProducto = idProducto;
        this.cantidadProducto = cantidadProducto;
        this.valorProducto = valorProducto;
    }
    //constructor para traer todas las ventas
public Ventas(int id, String fechaVenta, Double valorGlobal, int idCliente, String numSerie, String estado ,int idFactura) {
        this.id = id;
        this.idCliente = idCliente;
        this.numSerie = numSerie;
        this.fechaVenta = fechaVenta;
        this.valorGlobal = valorGlobal;
        this.estado = estado;
        this.idFactura = idFactura;
    }
    
    

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getItem() {
        return item;
    }

    public void setItem(int item) {
        this.item = item;
    }

    public int getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(int idCliente) {
        this.idCliente = idCliente;
    }

    public int getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(int idProducto) {
        this.idProducto = idProducto;
    }

    public String getNumSerie() {
        return numSerie;
    }

    public void setNumSerie(String numSerie) {
        this.numSerie = numSerie;
    }

    public String getNameProducto() {
        return nameProducto;
    }

    public void setNameProducto(String nameProducto) {
        this.nameProducto = nameProducto;
    }

    public String getFechaVenta() {
        return fechaVenta;
    }

    public void setFechaVenta(String fechaVenta) {
        this.fechaVenta = fechaVenta;
    }

    public Double getValorGlobal() {
        return valorGlobal;
    }

    public void setValorGlobal(Double valorGlobal) {
        this.valorGlobal = valorGlobal;
    }

    public Double getCantidadProducto() {
        return cantidadProducto;
    }

    public void setCantidadProducto(Double cantidad) {
        this.cantidadProducto = cantidad;
    }

    public Double getSubTotal() {
        return subTotal;
    }

    public void setSubTotal(Double subTotal) {
        this.subTotal = subTotal;
    }

    public Double getValorProducto() {
        return valorProducto;
    }

    public void setValorProducto(Double valorProducto) {
        this.valorProducto = valorProducto;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }
     public int getIdDetalleVenta() {
        return idDetalleVenta;
    }

    public void setIdDetalleVenta(int idDetalleVenta) {
        this.idDetalleVenta = idDetalleVenta;
    }
    public String getDetallesProducto() {
        return detallesProducto;
    }

    public void setDetallesProducto(String detallesProducto) {
        this.detallesProducto = detallesProducto;
    }

    public int getIdMensajero() {
        return idMensajero;
    }

    public void setIdMensajero(int idMensajero) {
        this.idMensajero = idMensajero;
    }

    public int getIdFactura() {
        return idFactura;
    }

    public void setIdFactura(int idFactura) {
        this.idFactura = idFactura;
    }

    public String getMes() {
        return mes;
    }

    public void setMes(String mes) {
        this.mes = mes;
    }

    public String getVentasMes() {
        return ventasMes;
    }

    public void setVentasMes(String ventasMes) {
        this.ventasMes = ventasMes;
    }
    
    
}