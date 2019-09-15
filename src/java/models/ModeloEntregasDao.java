package models;

import classes.Entregas;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class ModeloEntregasDao extends Conexion {

    PreparedStatement pst = null;//Abre flujo y manda parametros
    ResultSet rs = null;
    boolean flag = false;

    public boolean generarEntrega(Entregas entrega) {
        // metodo para generar una entega
        try {
            String sql = "call generarEntrega(?,?,?)";
            pst = getConnection().prepareCall(sql);//abriendo la coneccion a la base de datos y los parametros que le voy a enviar (sentencia sql)            

            pst.setString(1, entrega.getFechaEntrega());
            pst.setInt(2, entrega.getIdFactura());
            pst.setInt(3, entrega.getIdMensajero());
          

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

}
