
package classes;


public class Entregas {
    
    private int id;
    private String fechaEntrega;
    private int idFactura;
    private int idMensajero;
    private String estadoEntrega;
    private String nameMensajero;
    private String nameMensajero1;
    private String celMensajero;
    private String emailMensajero;
    private String numFactura;
    private Double valorGlobal;
    private String zona;
    private int idCliente;
    private int idOrdenVenta;

    public Entregas() {
    }
    //constructor para traer todos los datos de una venta
    public Entregas(int id, String fechaEntrega, int idFactura, int idMensajero) {
        this.id = id;
        this.fechaEntrega = fechaEntrega;
        this.idFactura = idFactura;
        this.idMensajero = idMensajero;
    }
    //constructor para crear un Entrega
    public Entregas(String fechaEntrega, int idFactura, int idMensajero, String estadoEntrega) {
        this.fechaEntrega = fechaEntrega;
        this.idFactura = idFactura;
        this.idMensajero = idMensajero;
        this.estadoEntrega = estadoEntrega;
    }

    public Entregas(String fechaEntrega, String nameMensajero, String nameMensajero1, String celMensajero, String emailMensajero) {
        this.fechaEntrega = fechaEntrega;
        this.nameMensajero = nameMensajero;
        this.nameMensajero1 = nameMensajero1;
        this.celMensajero = celMensajero;
        this.emailMensajero = emailMensajero;
    }

    public Entregas(int id, String fechaEntrega, int idFactura, int idMensajero, String estadoEntrega, String nameMensajero, String nameMensajero1, String celMensajero, String emailMensajero, String numFactura, Double valorGlobal, String zona, int idCliente) {
        this.id = id;
        this.fechaEntrega = fechaEntrega;
        this.idFactura = idFactura;
        this.idMensajero = idMensajero;
        this.estadoEntrega = estadoEntrega;
        this.nameMensajero = nameMensajero;
        this.nameMensajero1 = nameMensajero1;
        this.celMensajero = celMensajero;
        this.emailMensajero = emailMensajero;
        this.numFactura = numFactura;
        this.valorGlobal = valorGlobal;
        this.zona = zona;
        this.idCliente = idCliente;
    }
 //constructor asignadas
    public Entregas(int id, String fechaEntrega, int idFactura, int idMensajero, String estadoEntrega, String numFactura, Double valorGlobal, String zona, int idCliente, int idOrdenVenta) {
        this.id = id;
        this.fechaEntrega = fechaEntrega;
        this.idFactura = idFactura;
        this.idMensajero = idMensajero;
        this.estadoEntrega = estadoEntrega;
        this.numFactura = numFactura;
        this.valorGlobal = valorGlobal;
        this.zona = zona;
        this.idCliente = idCliente;
        this.idOrdenVenta = idOrdenVenta;
    }

    public String getNumFactura() {
        return numFactura;
    }

    public void setNumFactura(String numFactura) {
        this.numFactura = numFactura;
    }

    public Double getValorGlobal() {
        return valorGlobal;
    }

    public void setValorGlobal(Double valorGlobal) {
        this.valorGlobal = valorGlobal;
    }

    public String getZona() {
        return zona;
    }

    public void setZona(String zona) {
        this.zona = zona;
    }

    public int getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(int idCliente) {
        this.idCliente = idCliente;
    }
    
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFechaEntrega() {
        return fechaEntrega;
    }

    public void setFechaEntrega(String fechaEntrega) {
        this.fechaEntrega = fechaEntrega;
    }

    public int getIdFactura() {
        return idFactura;
    }

    public void setIdFactura(int idFactura) {
        this.idFactura = idFactura;
    }

    public int getIdMensajero() {
        return idMensajero;
    }

    public void setIdMensajero(int idMensajero) {
        this.idMensajero = idMensajero;
    }

    public String getEstadoEntrega() {
        return estadoEntrega;
    }

    public void setEstadoEntrega(String estadoEntrega) {
        this.estadoEntrega = estadoEntrega;
    }

    public String getNameMensajero() {
        return nameMensajero;
    }

    public void setNameMensajero(String nameMensajero) {
        this.nameMensajero = nameMensajero;
    }

    public String getNameMensajero1() {
        return nameMensajero1;
    }

    public void setNameMensajero1(String nameMensajero1) {
        this.nameMensajero1 = nameMensajero1;
    }
    
    public String getCelMensajero() {
        return celMensajero;
    }

    public void setCelMensajero(String celMensajero) {
        this.celMensajero = celMensajero;
    }

    public String getEmailMensajero() {
        return emailMensajero;
    }

    public void setEmailMensajero(String emailMensajero) {
        this.emailMensajero = emailMensajero;
    }

    public int getIdOrdenVenta() {
        return idOrdenVenta;
    }

    public void setIdOrdenVenta(int idOrdenVenta) {
        this.idOrdenVenta = idOrdenVenta;
    }
    
    
    
}
