package models;

import classes.Producto;
import classes.Proveedores;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class ModeloProveedoresDAO extends Conexion {

    PreparedStatement pst = null;//Abre flujo y manda parametros
    //metodo para insertar un proveedor

    public boolean crearProveedor(Proveedores p) {
        boolean flag = false;
        try {
            String sql = "call insertProveedor(?,?,?,?,?,?,?,?)";
            pst = getConnection().prepareStatement(sql);
            pst.setString(1, p.getRazonSocial());
            pst.setString(2, p.getNit());
            pst.setString(3, p.getEmailP());
            pst.setString(4, p.getNumCellPhoneP());
            pst.setString(5, p.getNumLandLineP());
            pst.setString(6, p.getAddressP());
            pst.setString(7, p.getRepresentanteLegal());
            pst.setString(8, p.getEstadoProveedor());

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
    //me todo para actualizar un proveedor

    public boolean UpdateProveedor(Proveedores p) {
        boolean flag = false;
        try {
            String sql = "call updateProveedores(?,?,?,?,?,?,?)";
            pst = getConnection().prepareStatement(sql);
            pst.setInt(1, p.getId());
            pst.setString(2, p.getRazonSocial());
            pst.setString(3, p.getEmailP());
            pst.setString(4, p.getNumCellPhoneP());
            pst.setString(5, p.getNumLandLineP());
            pst.setString(6, p.getAddressP());
            pst.setString(7, p.getRepresentanteLegal());
            

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

    //metodo para actualizar el estado de un proveedor
    public boolean UpdateEstadoProveedor(Proveedores p) {
        boolean flag = false;
        try {
            String sql = "call updateEstadoProveedor(?,?)";
            pst = getConnection().prepareStatement(sql);
            pst.setInt(1, p.getId());
            pst.setString(2, p.getEstadoProveedor());

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

    //metodo para listar todos los proveedores
    public ArrayList<Proveedores> getAllProveedores() {//creo el metodo producto de tipo arraylist
        ArrayList<Proveedores> pr = new ArrayList<>();//creando el arraylist de tipo producto
        ResultSet rs = null;// trae el resultado de lo que haga en la base de datos
        try {
            String sql = "call listProveedores()";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la conexión a la base de datos y los parametros que le voy a enviar (sentencia sql)
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                pr.add(new Proveedores(rs.getInt("idProveedor"), rs.getString("razonSocial"), rs.getString("nit"), rs.getString("emailP"), rs.getString("numCellPhoneP"), rs.getString("numLandLineP"), rs.getString("addressP"), rs.getString("representanteLegal"), rs.getString("estadoProveedor")));
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
        return pr;
    }

    public Proveedores getProveedorId(int id) {
        Proveedores prov = null;
        PreparedStatement pst = null;
        ResultSet rs = null;
        try {
            String sql = "call listProveedoresId(?)";
            pst = getConnection().prepareCall(sql);
            pst.setInt(1, id);
            rs = pst.executeQuery();
            while (rs.next()) {
                prov = new Proveedores(rs.getString("razonSocial"), rs.getString("nit"), rs.getString("emailP"), rs.getString("numCellPhoneP"), rs.getString("numLandLineP"), rs.getString("addressP"), rs.getString("representanteLegal"), rs.getString("estadoProveedor"));
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
        return prov;
    }
    
    public static void main(String[] args) {
        ModeloProveedoresDAO mpvd4 = new ModeloProveedoresDAO();
                Proveedores prv5 = new Proveedores(2, "kjff", "kjff", "kjff", "kjff", "kjff", "kjff");
                if (mpvd4.UpdateProveedor(prv5)) {
                    System.out.print("1");
                } else {
                    System.out.print("0");
                }
    }

}
