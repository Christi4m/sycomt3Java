package models;

import classes.Compras;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class ComprasDAO extends Conexion {

    boolean flag = false;
    PreparedStatement pst = null;//Abre flujo y manda parametro
    ResultSet rs = null;// trae el resultado de lo que haga en la base de datos

    public boolean newShop(Compras c) {
        try {
            String sql = "call newShop(?,?,?,?,?)";
            pst = getConnection().prepareStatement(sql);
            
            pst.setString(1, c.getFechaShop());
            pst.setString(2, c.getObsShop());
            pst.setDouble(3, c.getValorTotalShop());
            pst.setInt(4, c.getIdProveedorShop());
            pst.setString(5, c.getEstadoShop());
            
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
    public boolean newDetailShop(Compras c) {
        try {
            String sql = "call newDetailShop(?,?,?,?)";
            pst = getConnection().prepareStatement(sql);
            
            pst.setInt(1, c.getIdShop());
            pst.setInt(2, c.getIdProductShop());
            pst.setDouble(3, c.getCantProductShop());
            pst.setDouble(4, c.getValorUnitario());
            
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
    public int idCompras() {
        int idVentas = 0;

        try {
            String sql = "select max(idCompras) from compras";
            pst = getConnection().prepareCall(sql);//abriendo la coneccion a la base de datos y los parametros que le voy a enviar (sentencia sql)
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                idVentas = rs.getInt(1);
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
    
    public ArrayList<Compras> getAllShop() {//creo el metodo producto de tipo arraylist
        ArrayList<Compras> compras = new ArrayList<>();//creando el arraylist de tipo producto
        
        try {
            String sql = "call getAllShop()";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la conexión a la base de datos y los parametros que le voy a enviar (sentencia sql)
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                compras.add(new Compras(rs.getInt("idCompras"), rs.getString("fechaCompra"), rs.getString("obsCompra"), rs.getDouble("valorGlobal"), rs.getInt("idProveedorFK2"), 0, 0, 0, rs.getString("estadoCompra")));
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
        return compras;
    }
    public ArrayList<Compras> getAllDetailsShop(int idShop) {//creo el metodo producto de tipo arraylist
        ArrayList<Compras> detalleCompras = new ArrayList<>();//creando el arraylist de tipo producto
        
        try {
            String sql = "call getAllDetailsShop(?)";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la conexión a la base de datos y los parametros que le voy a enviar (sentencia sql)
             pst.setInt(1, idShop);
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                detalleCompras.add(new Compras(rs.getInt("idComprasFK2"), "", "", 0, 0, rs.getInt("idProductoFK2"), rs.getDouble("cantidadProductoOrden"), rs.getDouble("valorUnitario"), ""));
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
        return detalleCompras;
    }
     public boolean udateStateShop(int idCompra, String estadoCompra) {
        
        try {
            String sql = "call udateStateShop(?,?)";
            pst = getConnection().prepareCall(sql);
            pst.setInt(1, idCompra);
            pst.setString(2, estadoCompra);
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


    public static void main(String[] args) {
        ComprasDAO shopDao2 = new ComprasDAO();
        int idShop = shopDao2.idCompras();
        String detail = "28,1,12000.00;30,1,12000.00;31,1,13500.00;";
                    
                    String[] arrOfStr = detail.split(";");
                    
                    for (String a : arrOfStr) {
                        StringTokenizer misAtributos = new StringTokenizer(a, ",");
                        System.out.println(arrOfStr[1]);
                        int idP = Integer.parseInt(misAtributos.nextToken().trim());
                        int cant = Integer.parseInt(misAtributos.nextToken().trim());
                        double precio = Double.parseDouble(misAtributos.nextToken().trim());
                        System.out.println(precio);
                        ComprasDAO shopDao3 = new ComprasDAO();
                        Compras shop2 = new Compras(idShop, "", "", 0, 0, idP, cant, precio,"");
                        
                        shopDao3.newDetailShop(shop2);
                    }
    }
           

}
