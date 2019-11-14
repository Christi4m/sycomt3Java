package models;

import classes.Pqrs;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class pqrsDAO extends Conexion {

    PreparedStatement pst = null;//Abre flujo y manda parametros
    ResultSet rs = null;
    boolean flag = false;

    //metodo para crear el numero de cun de una pqrs
    public String generarCUN() {
        String numSerie = "";

        try {
            String sql = "select max(CUN) from pqrs";
            pst = getConnection().prepareCall(sql);//abriendo la coneccion a la base de datos y los parametros que le voy a enviar (sentencia sql)
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                numSerie = rs.getString(1);
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
                    getConnection().close();//cerrar la conección
                }
            } catch (Exception e) {
            }
        }
        return numSerie;
    }
    // metdo para la creacion de una pqrs

    public boolean newPqrs(Pqrs p) {
        try {
            String sql = "call newPqrs(?,?,?,?,?,?)";
            pst = getConnection().prepareStatement(sql);
            pst.setString(1, p.getDescription());
            pst.setString(2, p.getDatePqrs());
            pst.setString(3, p.getEvidence());
            pst.setString(4, p.getCUN());
            pst.setInt(5, p.getIdClient());
            pst.setString(6, p.getType());

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

    public ArrayList<Pqrs> listPqrs() {//creo el metodo producto de tipo arraylist
        ArrayList<Pqrs> pqrs = new ArrayList<>();//creando el arraylist de tipo producto
        ResultSet rs = null;// trae el resultado de lo que haga en la base de datos
        try {
            String sql = "call listPqrs()";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la conexión a la base de datos y los parametros que le voy a enviar (sentencia sql)
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                pqrs.add(new Pqrs(rs.getInt("id"), rs.getString("description"), rs.getString("datePqrs"),
                        rs.getString("evidence"), rs.getString("CUN"), rs.getInt("idTerceroFK6"), rs.getString("typePqrs"), ""));
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
        return pqrs;
    }

    public ArrayList<Pqrs> listPqrsArrayId(int id) {//creo el metodo producto de tipo arraylist
        ArrayList<Pqrs> pqrs = new ArrayList<>();//creando el arraylist de tipo producto
        ResultSet rs = null;// trae el resultado de lo que haga en la base de datos
        try {
            String sql = "call listPqrsIdUser(?)";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la conexión a la base de datos y los parametros que le voy a enviar (sentencia sql)
            pst.setInt(1, id);
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                pqrs.add(new Pqrs(rs.getInt("id"), rs.getString("description"), rs.getString("datePqrs"),
                        rs.getString("evidence"), rs.getString("CUN"), rs.getInt("idTerceroFK6"), rs.getString("typePqrs"), ""));
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
        return pqrs;
    }

    public Pqrs listPqrsId(int id) {
        Pqrs pqrs = null;

        try {
            String sql = "call listPqrsID(?)";
            pst = getConnection().prepareCall(sql);
            pst.setInt(1, id);
            rs = pst.executeQuery();
            while (rs.next()) {
                pqrs = new Pqrs(id, rs.getString("description"), rs.getString("datePqrs"),
                        rs.getString("evidence"), rs.getString("CUN"), rs.getInt("idTerceroFK6"),
                        rs.getString("typePqrs"), "");
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
        return pqrs;
    }

    public static void main(String[] args) {
        String fileName = "sr1.jpg";
        String CUN = "000001";
        String fil[] = fileName.split("\\.");
//
        String file2 = CUN + "." + fil[1];
        System.out.println(file2);
    }
}
