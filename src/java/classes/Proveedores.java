package classes;

public class Proveedores {
    
    private int id;
    private String razonSocial;
    private String nit;
    private String emailP;
    private String numCellPhoneP;
    private String numLandLineP;
    private String addressP;
    private String representanteLegal;
    private String estadoProveedor;

    public Proveedores() {
    }
// Constructor para actualizar un proveedor
    public Proveedores(int id, String razonSocial, String emailP, String numCellPhoneP, String numLandLineP, String addressP, String representanteLegal) {
        this.id = id;
        this.razonSocial = razonSocial;        
        this.emailP = emailP;
        this.numCellPhoneP = numCellPhoneP;
        this.numLandLineP = numLandLineP;
        this.addressP = addressP;
        this.representanteLegal = representanteLegal;
    }
    
    //constructor para actualizar el estado de un proveedor

    public Proveedores(int id, String estadoProveedor) {
        this.id = id;
        this.estadoProveedor = estadoProveedor;
    }
    
    //constructor para insertar un proveedor en la base de datos

    public Proveedores(String razonSocial, String nit, String emailP, String numCellPhoneP, String numLandLineP, String addressP, String representanteLegal, String estadoProveedor) {
        this.razonSocial = razonSocial;
        this.nit = nit;
        this.emailP = emailP;
        this.numCellPhoneP = numCellPhoneP;
        this.numLandLineP = numLandLineP;
        this.addressP = addressP;
        this.representanteLegal = representanteLegal;
        this.estadoProveedor = estadoProveedor;
    }
    
    // constructor para  listar  un proveedor de la base de datos
    public Proveedores(int id, String razonSocial, String nit, String emailP, String numCellPhoneP, String numLandLineP, String addressP, String representanteLegal, String estadoProveedor) {
        this.id = id;
        this.razonSocial = razonSocial;
        this.nit = nit;
        this.emailP = emailP;
        this.numCellPhoneP = numCellPhoneP;
        this.numLandLineP = numLandLineP;
        this.addressP = addressP;
        this.representanteLegal = representanteLegal;
        this.estadoProveedor = estadoProveedor;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRazonSocial() {
        return razonSocial;
    }

    public void setRazonSocial(String razonSocial) {
        this.razonSocial = razonSocial;
    }

    public String getNit() {
        return nit;
    }

    public void setNit(String nit) {
        this.nit = nit;
    }

    public String getEmailP() {
        return emailP;
    }

    public void setEmailP(String emailP) {
        this.emailP = emailP;
    }

    public String getNumCellPhoneP() {
        return numCellPhoneP;
    }

    public void setNumCellPhoneP(String numCellPhoneP) {
        this.numCellPhoneP = numCellPhoneP;
    }

    public String getNumLandLineP() {
        return numLandLineP;
    }

    public void setNumLandLineP(String numLandLineP) {
        this.numLandLineP = numLandLineP;
    }

    public String getAddressP() {
        return addressP;
    }

    public void setAddressP(String addressP) {
        this.addressP = addressP;
    }

    public String getRepresentanteLegal() {
        return representanteLegal;
    }

    public void setRepresentanteLegal(String representanteLegal) {
        this.representanteLegal = representanteLegal;
    }

    public String getEstadoProveedor() {
        return estadoProveedor;
    }

    public void setEstadoProveedor(String estadoProveedor) {
        this.estadoProveedor = estadoProveedor;
    }

}
