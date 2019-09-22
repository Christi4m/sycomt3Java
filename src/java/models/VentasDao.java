package models;

import classes.Producto;
import classes.Ventas;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class VentasDao extends Conexion {

    PreparedStatement pst = null;//Abre flujo y manda parametros
    ResultSet rs = null;
    boolean flag = false;

    //metodo para seleccionar el numero de serie "factura" de la ultima venta ingresada
    public String generarNumSerie() {
        String numSerie = "";

        try {
            String sql = "select max(numSerie) from ordenventa";
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

    //metodo para seleccionar el id de la ultima venta ingresada
    public String idVentas() {
        String idVentas = "";

        try {
            String sql = "select max(idOrdenVenta) from ordenventa";
            pst = getConnection().prepareCall(sql);//abriendo la coneccion a la base de datos y los parametros que le voy a enviar (sentencia sql)
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                idVentas = rs.getString(1);
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
        return idVentas;
    }

    //metodo para guardar las ventas generadas en el sistema
    public boolean guardarVentas(Ventas v) {

        try {
            String sql = "call insertVenta(?,?,?,?,?)";
            pst = getConnection().prepareCall(sql);//abriendo la coneccion a la base de datos y los parametros que le voy a enviar (sentencia sql)            

            pst.setString(1, v.getFechaVenta());
            pst.setDouble(2, v.getValorGlobal());
            pst.setInt(3, v.getIdCliente());
            pst.setString(4, v.getNumSerie());
            pst.setString(5, v.getEstado());

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

    //metodo para guardar los detalles de venta de una valga la redundancia venda, es decir cada venta tiene
    //determinados productos. Esos productos se almacenan con este metodo en la tabla detalleventa
    public boolean guardarDetalleVenta(Ventas vent) {
        try {
            String sql = "insert into detalleventa(idOrdenVentaFK1,idProductoFK1,cantidadProductoOrden,precioProducto) values(?,?,?,?)";
            pst = getConnection().prepareCall(sql);//abriendo la coneccion a la base de datos y los parametros que le voy a enviar (sentencia sql)

            pst.setInt(1, vent.getId());
            pst.setInt(2, vent.getIdProducto());
            pst.setDouble(3, vent.getCantidadProducto());
            pst.setDouble(4, vent.getValorProducto());

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
//metodo para listar el reporte de ventas por mes

    public ArrayList<Ventas> getAllVentasMes() {

        ArrayList<Ventas> v = new ArrayList<>();
        try {
            String sql = "call ventasPorMes()";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la coneccion a la base de datos y los parametros que le voy a enviar (sentencia sql)
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                v.add(new Ventas(rs.getString("Mes"), rs.getString("ventasMes")));
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
    public ArrayList<Ventas> reporte2() {

        ArrayList<Ventas> v = new ArrayList<>();
        try {
            String sql = "call ventasPorMesLino()";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la coneccion a la base de datos y los parametros que le voy a enviar (sentencia sql)
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                String ventasLino = rs.getString("Enero")+","+rs.getString("Febrero")+","+rs.getString("Marzo")+","+rs.getString("Abril")+","+rs.getString("Mayo")+","+rs.getString("Junio")+","+rs.getString("Julio")+","+rs.getString("Agosto")+","+rs.getString("Septiembre")+","+rs.getString("Octubre")+","+rs.getString("Noviembre")+","+rs.getString("Diciembre");
                v.add(new Ventas("Lino",ventasLino));
            }
            sql = "call ventasPorMesSeda()";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la coneccion a la base de datos y los parametros que le voy a enviar (sentencia sql)
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                String ventasLino = rs.getString("Enero")+","+rs.getString("Febrero")+","+rs.getString("Marzo")+","+rs.getString("Abril")+","+rs.getString("Mayo")+","+rs.getString("Junio")+","+rs.getString("Julio")+","+rs.getString("Agosto")+","+rs.getString("Septiembre")+","+rs.getString("Octubre")+","+rs.getString("Noviembre")+","+rs.getString("Diciembre");
                v.add(new Ventas("Seda",ventasLino));
            }
            sql = "call ventasPorMesUniforme()";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la coneccion a la base de datos y los parametros que le voy a enviar (sentencia sql)
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                String ventasLino = rs.getString("Enero")+","+rs.getString("Febrero")+","+rs.getString("Marzo")+","+rs.getString("Abril")+","+rs.getString("Mayo")+","+rs.getString("Junio")+","+rs.getString("Julio")+","+rs.getString("Agosto")+","+rs.getString("Septiembre")+","+rs.getString("Octubre")+","+rs.getString("Noviembre")+","+rs.getString("Diciembre");
                v.add(new Ventas("Uniforme",ventasLino));
            }
            sql = "call ventasPorMesPano()";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la coneccion a la base de datos y los parametros que le voy a enviar (sentencia sql)
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                String ventasLino = rs.getString("Enero")+","+rs.getString("Febrero")+","+rs.getString("Marzo")+","+rs.getString("Abril")+","+rs.getString("Mayo")+","+rs.getString("Junio")+","+rs.getString("Julio")+","+rs.getString("Agosto")+","+rs.getString("Septiembre")+","+rs.getString("Octubre")+","+rs.getString("Noviembre")+","+rs.getString("Diciembre");
                v.add(new Ventas("Paño",ventasLino));
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
    public ArrayList<Ventas> reporte3() {

        ArrayList<Ventas> v = new ArrayList<>();
        try {
            String sql = "call cantidadVentasMesLino()";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la coneccion a la base de datos y los parametros que le voy a enviar (sentencia sql)
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                String ventasLino = rs.getString("Enero")+","+rs.getString("Febrero")+","+rs.getString("Marzo")+","+rs.getString("Abril")+","+rs.getString("Mayo")+","+rs.getString("Junio")+","+rs.getString("Julio")+","+rs.getString("Agosto")+","+rs.getString("Septiembre")+","+rs.getString("Octubre")+","+rs.getString("Noviembre")+","+rs.getString("Diciembre");
                v.add(new Ventas("Lino",ventasLino));
            }
            sql = "call cantidadVentasMesSeda()";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la coneccion a la base de datos y los parametros que le voy a enviar (sentencia sql)
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                String ventasLino = rs.getString("Enero")+","+rs.getString("Febrero")+","+rs.getString("Marzo")+","+rs.getString("Abril")+","+rs.getString("Mayo")+","+rs.getString("Junio")+","+rs.getString("Julio")+","+rs.getString("Agosto")+","+rs.getString("Septiembre")+","+rs.getString("Octubre")+","+rs.getString("Noviembre")+","+rs.getString("Diciembre");
                v.add(new Ventas("Seda",ventasLino));
            }
            sql = "call cantidadVentasMesUniforme()";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la coneccion a la base de datos y los parametros que le voy a enviar (sentencia sql)
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                String ventasLino = rs.getString("Enero")+","+rs.getString("Febrero")+","+rs.getString("Marzo")+","+rs.getString("Abril")+","+rs.getString("Mayo")+","+rs.getString("Junio")+","+rs.getString("Julio")+","+rs.getString("Agosto")+","+rs.getString("Septiembre")+","+rs.getString("Octubre")+","+rs.getString("Noviembre")+","+rs.getString("Diciembre");
                v.add(new Ventas("Uniforme",ventasLino));
            }
            sql = "call cantidadVentasMesPano()";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la coneccion a la base de datos y los parametros que le voy a enviar (sentencia sql)
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                String ventasLino = rs.getString("Enero")+","+rs.getString("Febrero")+","+rs.getString("Marzo")+","+rs.getString("Abril")+","+rs.getString("Mayo")+","+rs.getString("Junio")+","+rs.getString("Julio")+","+rs.getString("Agosto")+","+rs.getString("Septiembre")+","+rs.getString("Octubre")+","+rs.getString("Noviembre")+","+rs.getString("Diciembre");
                v.add(new Ventas("Paño",ventasLino));
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

    //metodo para listar todas las ventas generadas en la base de datos
    public ArrayList<Ventas> getAllVEntas() {

        ArrayList<Ventas> v = new ArrayList<>();
        try {
            String sql = "call getAllVentas()";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la coneccion a la base de datos y los parametros que le voy a enviar (sentencia sql)
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                v.add(new Ventas(rs.getInt("idOrdenVenta"), rs.getString("fechaOrdenVenta"), rs.getDouble("valorGlobal"), rs.getInt("idTerceroF1"), rs.getString("numSerie"), rs.getString("estadoOrdenVenta"), 0));
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

    public ArrayList<Ventas> getAllDespachos() {

        ArrayList<Ventas> v = new ArrayList<>();
        try {
            String sql = "call getAllDespachos()";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la coneccion a la base de datos y los parametros que le voy a enviar (sentencia sql)
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                v.add(new Ventas(rs.getInt("idOrdenVenta"), rs.getString("fechaOrdenVenta"), rs.getDouble("valorGlobal"), rs.getInt("idTerceroF1"), rs.getString("numSerie"), rs.getString("estadoOrdenVenta"), 0));
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

    // metodo para listar todos los detalles de venta assignados a una venta es decir todos lo productos 
    //que contiene la venta en consulta
    public ArrayList<Ventas> getAllDetallesVentas(int id) {//creo el metodo producto de tipo arraylist
        ArrayList<Ventas> ventas = new ArrayList<>();//creando el arraylist de tipo producto
        ResultSet rs = null;// trae el resultado de lo que haga en la breando base de datos
        try {
            String sql = "call detalleventa(?)";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la coneccion a la base de datos y los parametros que le voy a enviar (sentencia sql)
            pst.setInt(1, id);
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                ventas.add(new Ventas(rs.getInt("idDetalleVenta"), rs.getInt("idProductoFK1"), rs.getString("nombreProducto"), rs.getString("descripcionProducto"), rs.getDouble("cantidadProductoOrden"), rs.getDouble("precioProducto")));
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
        return ventas;
    }

    //metodo para eliminar una venta
    public boolean deleteVenta(int idVenta) {
        boolean flag = false;

        try {
            String sql = "delete from ordenventa where idOrdenVenta = (?)";
            pst = getConnection().prepareCall(sql);
            pst.setInt(1, idVenta);
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

    // metodo para actualizar o modificar el estado de la venta es decir es el metodo que se va a usar para 
    // despachar las ventas dandeles un estado confirmada o una finalizar el proceso dandole un estado entregada
    public boolean ProcesarVenta(int idVenta, String estadoOrdenVenta) {
        boolean flag = false;

        try {
            String sql = "call procesarVenta(?,?)";
            pst = getConnection().prepareCall(sql);
            pst.setInt(1, idVenta);
            pst.setString(2, estadoOrdenVenta);
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

    public boolean insertFactura(String numFactura, int idVenta) {
        boolean flag = false;

        try {
            String sql = "call insertFactura(?,?)";
            pst = getConnection().prepareCall(sql);
            pst.setString(1, numFactura);
            pst.setInt(2, idVenta);
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

    
}
