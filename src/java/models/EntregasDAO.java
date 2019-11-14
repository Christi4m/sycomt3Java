package models;

import classes.Entregas;
import classes.Ventas;
import com.google.gson.JsonObject;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class EntregasDAO extends Conexion {

    PreparedStatement pst = null;//Abre flujo y manda parametros
    ResultSet rs = null;
    boolean flag = false;

    public boolean generarEntrega(Entregas entrega) {
        // metodo para generar una entega
        try {
            String sql = "call generarEntrega(?,?,?,?)";
            pst = getConnection().prepareCall(sql);//abriendo la coneccion a la base de datos y los parametros que le voy a enviar (sentencia sql)            

            pst.setString(1, entrega.getFechaEntrega());
            pst.setInt(2, entrega.getIdFactura());
            pst.setInt(3, entrega.getIdMensajero());
            pst.setString(4, entrega.getEstadoEntrega());
          

            if (pst.executeUpdate() == 1) {
                flag = true;
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
        return flag;
    }
    
    public ArrayList<Entregas> getAllEntregasAsignadas(int id) {

        ArrayList<Entregas> v = new ArrayList<>();
        try {
            String sql = "call mensajeroAsignado(?)";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la coneccion a la base de datos y los parametros que le voy a enviar (sentencia sql)
            pst.setInt(1, id);
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                v.add(new Entregas(rs.getString("fechaEntrega"),rs.getString("firstName"),rs.getString("firstLastName"),rs.getString("numCellPhone"), rs.getString("email")));
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
        return v;

    }

    
}
