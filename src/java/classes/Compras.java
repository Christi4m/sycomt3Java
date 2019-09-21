
package classes;

public class Compras {
     private int idShop;
     private String fechaShop;
     private String obsShop;
     private double valorTotalShop;
     private int idProveedorShop;
     private int idProductShop;
     private double cantProductShop;
     private double valorUnitario;
     private String estadoShop;

    public Compras() {
    }

    public Compras(int idShop, String fechaShop, String obsShop, double valorTotalShop, int idProveedorShop, int idProductShop, double cantProductShop, double valorUnitario, String estadoShop) {
        this.idShop = idShop;
        this.fechaShop = fechaShop;
        this.obsShop = obsShop;
        this.valorTotalShop = valorTotalShop;
        this.idProveedorShop = idProveedorShop;
        this.idProductShop = idProductShop;
        this.cantProductShop = cantProductShop;
        this.valorUnitario = valorUnitario;
        this.estadoShop = estadoShop;
    }

  
    


    public int getIdShop() {
        return idShop;
    }

    public void setIdShop(int idShop) {
        this.idShop = idShop;
    }

    public String getFechaShop() {
        return fechaShop;
    }

    public void setFechaShop(String fechaShop) {
        this.fechaShop = fechaShop;
    }

    public String getObsShop() {
        return obsShop;
    }

    public void setObsShop(String obsShop) {
        this.obsShop = obsShop;
    }

    public double getValorTotalShop() {
        return valorTotalShop;
    }

    public void setValorTotalShop(double valorTotalShop) {
        this.valorTotalShop = valorTotalShop;
    }

    public int getIdProveedorShop() {
        return idProveedorShop;
    }

    public void setIdProveedorShop(int idProveedorShop) {
        this.idProveedorShop = idProveedorShop;
    }

    public int getIdProductShop() {
        return idProductShop;
    }

    public void setIdProductShop(int idProductShop) {
        this.idProductShop = idProductShop;
    }

    public double getCantProductShop() {
        return cantProductShop;
    }

    public void setCantProductShop(double cantProductShop) {
        this.cantProductShop = cantProductShop;
    }

    public double getValorUnitario() {
        return valorUnitario;
    }

    public void setValorUnitario(double valorUnitario) {
        this.valorUnitario = valorUnitario;
    }

    public String getEstadoShop() {
        return estadoShop;
    }

    public void setEstadoShop(String estadoShop) {
        this.estadoShop = estadoShop;
    }
    
    
     
     
}
