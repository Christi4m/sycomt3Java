package models;

import classes.Tercero;
import classes.Producto;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class TerceroDAO extends Conexion {

    PreparedStatement pst = null;//Abre flujo y manda parametros
    ResultSet rs = null;
    boolean flag = false;
//metodo para crear o registrar a un cliente en el sistema

    public boolean createClient(Tercero c) {

        try {
            String sql = "call insertCliente(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,)";
            pst = getConnection().prepareStatement(sql);
            pst.setString(1, c.getTypeId());
            pst.setInt(2, c.getNumId());
            pst.setString(3, c.getFirstName());
            pst.setString(4, c.getSecondName());
            pst.setString(5, c.getFirstLastName());
            pst.setString(6, c.getSecondLastName());
            pst.setString(7, c.getEmail());
            pst.setString(8, c.getNumCellPhone());
            pst.setString(9, c.getNumLandLine());
            pst.setString(10, c.getAddress());
            pst.setString(11, c.getDetailsAddress());
            pst.setString(12, c.getUserAccess());
            pst.setString(13, c.getPasswordAccess());
            pst.setString(14, c.getTypeUser());
            pst.setString(15, c.getLocalidad());
            pst.setString(16, c.getBarrrio());

            if (pst.executeUpdate() == 1) {
                flag = true;
            }

        } catch (Exception e) {

        } finally {
            try {
                if (pst != null) {
                    pst.close();
                }
                if (getConnection() != null) {
                    getConnection().close();
                }
            } catch (Exception e) {
            }
        }
        return flag;
    }
//metodo para crear o registrar un empleado en el sistema

    public boolean insertEmpleado(Tercero te) {
        try {
            String sql = "call insertEmpleado(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            pst = getConnection().prepareCall(sql);

            pst.setString(1, te.getTypeId()); // parametros para los procedimientos almacenados // 
            pst.setInt(2, te.getNumId());
            pst.setString(3, te.getFirstName());
            pst.setString(4, te.getSecondName());
            pst.setString(5, te.getFirstLastName());
            pst.setString(6, te.getSecondLastName());
            pst.setString(7, te.getEmail());
            pst.setString(8, te.getNumCellPhone());
            pst.setString(9, te.getNumLandLine());
            pst.setString(10, te.getAddress());
            pst.setString(11, te.getTipoContrato());
            pst.setString(12, te.getNumContrato());
            pst.setString(13, te.getFechaInicioContrato());
            pst.setString(14, te.getFechafinContrato());
            pst.setString(15, te.getEstadoCivil());
            pst.setString(16, te.getNumHijos());
            pst.setString(17, te.getEps());
            pst.setString(18, te.getPensiones());
            pst.setString(19, te.getCesantias());
            pst.setString(20, te.getArl());
            pst.setString(21, te.getCajaCompensacion());
            pst.setString(22, te.getTypeUser());
            pst.setString(23, te.getEstadoTercero());

            if (pst.executeUpdate() == 1) {
                flag = true;
            }

        } catch (Exception e) {
        } finally {
            try {
                if (rs != null) {
                    rs.close();

                }
                if (pst != null) {
                    pst.close();
                }
                if (getConnection() != null) {
                    getConnection().close();
                }
            } catch (Exception e) {
            }
        }
        return flag;

    }
//metodo para traer los datos de un tercero por su user access

    public Tercero getTercero(String User) {
        Tercero tercero = null;
        PreparedStatement pst = null;
        ResultSet rs = null;
        try {
            String sql = "call listTercero(?)";
            pst = getConnection().prepareCall(sql);
            pst.setString(1, User);
            rs = pst.executeQuery();
            while (rs.next()) {
                tercero = new Tercero(rs.getInt("idTercero"), rs.getString("typeTercero"), rs.getString("typeId"), rs.getInt("numId"), rs.getString("firstName"), rs.getString("secondName"), rs.getString("firstLastName"), rs.getString("secondLastName"), rs.getString("email"), rs.getString("numCellPhone"), rs.getString("numLandLine"), rs.getString("address"), rs.getString("detailsAddress"));
            }

        } catch (Exception e) {

        } finally {
            try {
                if (rs != null) {
                    rs.close();

                }
                if (pst != null) {
                    pst.close();
                }
                if (getConnection() != null) {
                    getConnection().close();
                }
            } catch (Exception e) {
            }
        }
        return tercero;

    }
//metodo para traer los datos de un tercero por su id

    public Tercero getTerceroId(int id) {
        Tercero tercero = null;
        PreparedStatement pst = null;
        ResultSet rs = null;
        try {
            String sql = "call listTerceroId(?)";
            pst = getConnection().prepareCall(sql);
            pst.setInt(1, id);
            rs = pst.executeQuery();
            while (rs.next()) {
                tercero = new Tercero(rs.getInt("idTercero"), rs.getString("typeId"), rs.getInt("numId"), rs.getString("firstName"), rs.getString("secondName"), rs.getString("firstLastName"), rs.getString("secondLastName"), rs.getString("email"), rs.getString("numCellPhone"), rs.getString("numLandLine"), rs.getString("address"), rs.getString("detailsAddress"));
            }

        } catch (Exception e) {

        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }
                if (pst != null) {
                    pst.close();
                }
                if (getConnection() != null) {
                    getConnection().close();
                }
            } catch (Exception e) {
            }
        }
        return tercero;

    }
//metodo para loguear a un cliente en el sistema

    public boolean loginUser(Tercero c) {

        try {
            String sql = "call loginUser(?,?)";
            pst = getConnection().prepareStatement(sql);
            pst.setString(1, c.getUserAccess());
            pst.setString(2, c.getPasswordAccess());
            rs = pst.executeQuery();

            if (rs.absolute(1)) {
                flag = true;
            }

        } catch (Exception e) {

        } finally {
            try {
                if (pst != null) {
                    pst.close();
                }
                if (getConnection() != null) {
                    getConnection().close();
                }
            } catch (Exception e) {
            }

        }

        return flag;
    }

    public boolean validarUserAccess(int id) {

        try {
            String sql = "call validarUserAccess(?)";
            pst = getConnection().prepareStatement(sql);
            pst.setInt(1, id);

            rs = pst.executeQuery();

            if (rs.absolute(1)) {
                flag = true;
            }

        } catch (Exception e) {

        } finally {
            try {
                if (pst != null) {
                    pst.close();
                }
                if (getConnection() != null) {
                    getConnection().close();
                }
            } catch (Exception e) {
            }

        }

        return flag;
    }

    //metodo para listar a los empleados
    public ArrayList<Tercero> getAllEmpleados() {//creo el metodo producto de tipo arraylist
        ArrayList<Tercero> empleado = new ArrayList<>();//creando el arraylist de tipo producto
        ResultSet rs = null;// trae el resultado de lo que haga en la base de datos
        try {
            String sql = "call listEmpleados()";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la conexión a la base de datos y los parametros que le voy a enviar (sentencia sql)
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                empleado.add(new Tercero(rs.getInt("idTercero"), rs.getInt("numId"), rs.getString("firstName"), rs.getString("secondName"), rs.getString("firstLastName"), rs.getString("secondLastName"), rs.getString("email"), rs.getString("numCellPhone"), rs.getString("typeTercero"), rs.getString("estadoTercero")));
            }
        } catch (Exception e) {

        } finally {
            try {
                if (rs != null) {
                    rs.close();//cerrar el resultSet
                }
                if (pst != null) {
                    pst.close();//cierra el preperentStament
                }
                if (getConnection() != null) {
                    getConnection().close();//cerrar la conexión
                }
            } catch (Exception e) {
            }
        }
        return empleado;
    }
//metodo para listar los emails de los clientes
    
     public ArrayList<Tercero> listEmailClientes() {//creo el metodo producto de tipo arraylist
        ArrayList<Tercero> emailsClientes = new ArrayList<>();//creando el arraylist de tipo producto
        ResultSet rs = null;// trae el resultado de lo que haga en la base de datos
        try {
            String sql = "call listEmailClientes()";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la conexión a la base de datos y los parametros que le voy a enviar (sentencia sql)
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                emailsClientes.add(new Tercero(rs.getString("email")));
            }
        } catch (Exception e) {

        } finally {
            try {
                if (rs != null) {
                    rs.close();//cerrar el resultSet
                }
                if (pst != null) {
                    pst.close();//cierra el preperentStament
                }
                if (getConnection() != null) {
                    getConnection().close();//cerrar la conexión
                }
            } catch (Exception e) {
            }
        }
        return emailsClientes;
    }
     
     
   
    
    
//metodo para listar los datos detalles de un empleado

    public Tercero getDetailsEmpleado(int id) {
        Tercero empleadoDetails = null;
        PreparedStatement pst = null;
        ResultSet rs = null;
        try {
            String sql = "call listDetailsEmpleado(?)";
            pst = getConnection().prepareCall(sql);
            pst.setInt(1, id);
            rs = pst.executeQuery();
            while (rs.next()) {
                empleadoDetails = new Tercero(rs.getString("tipoContrato"), rs.getString("numContrato"), rs.getString("fechaInicio"), rs.getString("fechaFin"), rs.getString("estadoCivil"), rs.getString("numHijos"), rs.getString("eps"), rs.getString("pensiones"), rs.getString("cesantias"), rs.getString("arl"), rs.getString("cajaCompensacion"));
            }

        } catch (Exception e) {

        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }
                if (pst != null) {
                    pst.close();
                }
                if (getConnection() != null) {
                    getConnection().close();
                }
            } catch (Exception e) {
            }
        }
        return empleadoDetails;

    }

    public boolean insertUserAccesEmpleado(Tercero userAccessEmpleado) {
        try {
            String sql = "call insertUserAccess(?,?,?)";
            pst = getConnection().prepareCall(sql);

            pst.setInt(1, userAccessEmpleado.getId()); // parametros para los procedimientos almacenados // 
            pst.setString(2, userAccessEmpleado.getUserAccess());
            pst.setString(3, userAccessEmpleado.getPasswordAccess());

            if (pst.executeUpdate() == 1) {
                flag = true;
            }

        } catch (Exception e) {
        } finally {
            try {
                if (rs != null) {
                    rs.close();

                }
                if (pst != null) {
                    pst.close();
                }
                if (getConnection() != null) {
                    getConnection().close();
                }
            } catch (Exception e) {
            }
        }
        return flag;

    }

    public static void main(String[] args) {
        ArrayList<String> email = new ArrayList<>();

        TerceroDAO modelo4 = new TerceroDAO();
        for (Tercero empleado1 : modelo4.getAllEmpleados()) {
            email.add(empleado1.getEmail());
        }
        System.out.println(email.toString());
    }
}
