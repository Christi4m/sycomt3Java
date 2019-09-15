package classes;

public class Tercero {
    // Atributos necesarios de la calse tercero
    private int id;
    private String typeId;
    private int numId;
    private String firstName;
    private String secondName;
    private String firstLastName;
    private String secondLastName;
    private String email;
    private String numCellPhone;
    private String numLandLine;
    private String address;
    private String detailsAddress;
    private String userAccess;
    private String passwordAccess;
    private String typeUser;
    private String tipoContrato ; 
    private String numContrato ; 
    private String fechaInicioContrato ; 
    private String FechafinContrato ; 
    private String estadoCivil ; 
    private String numHijos ; 
    private String eps ; 
    private String pensiones ;    
    private String cesantias ;     
    private String arl ;     
    private String cajaCompensacion ;
    private String estadoTercero;
   
    //Constructor vacio
    public Tercero() {
    }
    // constructor para listar datos principales de un empleados

    public Tercero(int id,int numId, String firstName, String secondName, String firstLastName, String secondLastName, String email, String numCellPhone, String typeUser, String estadoTercero) {
        this.id = id;
        this.numId = numId;
        this.firstName = firstName;
        this.secondName = secondName;
        this.firstLastName = firstLastName;
        this.secondLastName = secondLastName;
        this.email = email;
        this.numCellPhone = numCellPhone;
        this.typeUser = typeUser;
        this.estadoTercero = estadoTercero;
    }
    
    //constructor para traer los detalles de contrato de un empleado

    public Tercero(String tipoContrato, String numContrato, String fechaInicioContrato, String FechafinContrato, String estadoCivil, String numHijos, String eps, String pensiones, String cesantias, String arl, String cajaCompensacion) {
        this.tipoContrato = tipoContrato;
        this.numContrato = numContrato;
        this.fechaInicioContrato = fechaInicioContrato;
        this.FechafinContrato = FechafinContrato;
        this.estadoCivil = estadoCivil;
        this.numHijos = numHijos;
        this.eps = eps;
        this.pensiones = pensiones;
        this.cesantias = cesantias;
        this.arl = arl;
        this.cajaCompensacion = cajaCompensacion;
    }
    
    
    
    //constructor para listar un tercero por su Id
    public Tercero(int id, String typeId, int numId, String firstName, String secondName, String firstLastName, String secondLastName, String email, String numCellPhone, String numLandLine, String address, String detailsAddress){
        this.id = id;
        this.typeId = typeId;
        this.numId = numId;
        this.firstName = firstName;
        this.secondName = secondName;
        this.firstLastName = firstLastName;
        this.secondLastName = secondLastName;
        this.email = email;
        this.numCellPhone = numCellPhone;
        this.numLandLine = numLandLine;
        this.address = address;
        this.detailsAddress = detailsAddress; 
    }
    //Constructor para Crear un empleado en la base de datos //

    public Tercero(String typeUser,String typeId, int numId, String firstName, String secondName, String firstLastName, String secondLastName, String email, String numCellPhone, String numLandLine, String address, String tipoContrato, String numContrato, String fechaInicioContrato, String FechafinContrato, String estadoCivil, String numHijos, String eps, String pensiones, String cesantias, String arl, String cajaCompensacion, String estadoTercero) {
        
        this.typeUser = typeUser;
        this.typeId = typeId;
        this.numId = numId;
        this.firstName = firstName;
        this.secondName = secondName;
        this.firstLastName = firstLastName;
        this.secondLastName = secondLastName;
        this.email = email;
        this.numCellPhone = numCellPhone;
        this.numLandLine = numLandLine;
        this.address = address;        
        this.tipoContrato = tipoContrato;
        this.numContrato = numContrato;
        this.fechaInicioContrato = fechaInicioContrato;
        this.FechafinContrato = FechafinContrato;
        this.estadoCivil = estadoCivil;
        this.numHijos = numHijos;
        this.eps = eps;
        this.pensiones = pensiones;
        this.cesantias = cesantias;
        this.arl = arl;
        this.cajaCompensacion = cajaCompensacion;
        this.estadoTercero = estadoTercero;
    }

    //Constructor para listar a un tercero en el sistema por su useerAcces
    public Tercero(int id,String typeUser, String typeId, int numId, String firstName, String secondName, String firstLastName, String secondLastName, String email, String numCellPhone, String numLandLine, String address, String detailsAddress) {
        this.id = id;
        this.typeUser = typeUser;
        this.typeId = typeId;
        this.numId = numId;
        this.firstName = firstName;
        this.secondName = secondName;
        this.firstLastName = firstLastName;
        this.secondLastName = secondLastName;
        this.email = email;
        this.numCellPhone = numCellPhone;
        this.numLandLine = numLandLine;
        this.address = address;
        this.detailsAddress = detailsAddress;        
        
    }
    
//Contructor para registrar un cliente en el sistema
    public Tercero(int id,String typeUser, String typeId, int numId, String firstName, String secondName, String firstLastName, String secondLastName, String email, String numCellPhone, String numLandLine, String address, String detailsAddress, String userAccess, String passwordAccess) {
        this.id = id;
        this.typeUser = typeUser ;
        this.typeId = typeId;
        this.numId = numId;
        this.firstName = firstName;
        this.secondName = secondName;
        this.firstLastName = firstLastName;
        this.secondLastName = secondLastName;
        this.email = email;
        this.numCellPhone = numCellPhone;
        this.numLandLine = numLandLine;
        this.address = address;
        this.detailsAddress = detailsAddress;
        this.userAccess = userAccess;
        this.passwordAccess = passwordAccess;
    }
        //constructor para logear un usuario en el sistema
    public Tercero(String userAccess, String passwordAccess) {
        this.userAccess = userAccess;
        this.passwordAccess = passwordAccess;        
    }
    //construtor para asignar userAceess y passwordAccess a un empleado
     public Tercero(int id,String userAccess, String passwordAccess) {
        this.id = id;
        this.userAccess = userAccess;
        this.passwordAccess = passwordAccess;        
    }

//aca inician los set y get    
    public String getTypeUser() {
        return typeUser;
    }

    public void setTypeUser(String typeUser) {
        this.typeUser = typeUser;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTypeId() {
        return typeId;
    }

    public void setTypeId(String typeId) {
        this.typeId = typeId;
    }

    public int getNumId() {
        return numId;
    }

    public void setNumId(int numId) {
        this.numId = numId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public String getFirstLastName() {
        return firstLastName;
    }

    public void setFirstLastName(String firstLastName) {
        this.firstLastName = firstLastName;
    }

    public String getSecondLastName() {
        return secondLastName;
    }

    public void setSecondLastName(String secondLastName) {
        this.secondLastName = secondLastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNumCellPhone() {
        return numCellPhone;
    }

    public void setNumCellPhone(String numCellPhone) {
        this.numCellPhone = numCellPhone;
    }

    public String getNumLandLine() {
        return numLandLine;
    }

    public void setNumLandLine(String numLandLine) {
        this.numLandLine = numLandLine;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDetailsAddress() {
        return detailsAddress;
    }

    public void setDetailsAddress(String detailsAddress) {
        this.detailsAddress = detailsAddress;
    }

    public String getUserAccess() {
        return userAccess;
    }

    public void setUserAccess(String userAccess) {
        this.userAccess = userAccess;
    }

    public String getPasswordAccess() {
        return passwordAccess;
    }

    public void setPasswordAccess(String passwordAccess) {
        this.passwordAccess = passwordAccess;
    }

    public String getTipoContrato() {
        return tipoContrato;
    }

    public void setTipoContrato(String tipoContrato) {
        this.tipoContrato = tipoContrato;
    }

    public String getNumContrato() {
        return numContrato;
    }

    public void setNumContrato(String numContrato) {
        this.numContrato = numContrato;
    }

    public String getFechaInicioContrato() {
        return fechaInicioContrato;
    }

    public void setFechaInicioContrato(String fechaInicioContrato) {
        this.fechaInicioContrato = fechaInicioContrato;
    }

    public String getFechafinContrato() {
        return FechafinContrato;
    }

    public void setFechafinContrato(String FechafinContrato) {
        this.FechafinContrato = FechafinContrato;
    }

    public String getEstadoCivil() {
        return estadoCivil;
    }

    public void setEstadoCivil(String estadoCivil) {
        this.estadoCivil = estadoCivil;
    }

    public String getNumHijos() {
        return numHijos;
    }

    public void setNumHijos(String numHijos) {
        this.numHijos = numHijos;
    }

    public String getEps() {
        return eps;
    }

    public void setEps(String eps) {
        this.eps = eps;
    }

    public String getPensiones() {
        return pensiones;
    }

    public void setPensiones(String pensiones) {
        this.pensiones = pensiones;
    }

    public String getCesantias() {
        return cesantias;
    }

    public void setCesantias(String cesantias) {
        this.cesantias = cesantias;
    }

    public String getArl() {
        return arl;
    }

    public void setArl(String arl) {
        this.arl = arl;
    }

    public String getCajaCompensacion() {
        return cajaCompensacion;
    }

    public void setCajaCompensacion(String cajaCompensacion) {
        this.cajaCompensacion = cajaCompensacion;
    }

    public String getEstadoTercero() {
        return estadoTercero;
    }

    public void setEstadoTercero(String estadoTercero) {
        this.estadoTercero = estadoTercero;
    }

}
