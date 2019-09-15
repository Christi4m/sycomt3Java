
package classes;


public class Entregas {
    
    private int id;
    private String fechaEntrega;
    private int idFactura;
    private int idMensajero;

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
    public Entregas(String fechaEntrega, int idFactura, int idMensajero) {
        this.fechaEntrega = fechaEntrega;
        this.idFactura = idFactura;
        this.idMensajero = idMensajero;
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
    
    
    
}
