
package models;
//llamando librerias o clases

import classes.Producto;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;



public class ProductoDAO extends Conexion {

    PreparedStatement pst = null;//Abre flujo y manda parametros

    public ArrayList<Producto> getAllProductos() {//creo el metodo producto de tipo arraylist
        ArrayList<Producto> productos = new ArrayList<>();//creando el arraylist de tipo producto
        ResultSet rs = null;// trae el resultado de lo que haga en la base de datos
        try {
            String sql = "call selectProducts()";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la conexión a la base de datos y los parametros que le voy a enviar (sentencia sql)
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                productos.add(new Producto(rs.getInt("idProducto"), rs.getString("nombreProducto"), rs.getString("descripcion"), rs.getString("tipoTelaje"), rs.getString("ubicacionBodega"), rs.getDouble("precioMC"), rs.getDouble("stock"), rs.getString("imagenProducto"), rs.getString("razonSocial")));
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
        return productos;
    }

    public ArrayList<Producto> getAllSearchProductos(String valSearch) {//creo el metodo producto de tipo arraylist
        ArrayList<Producto> productos = new ArrayList<>();//creando el arraylist de tipo producto
        ResultSet rs = null;// trae el resultado de lo que haga en la base de datos
        try {
            String sql = "call selectProductsSearch(?)";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la conexión a la base de datos y los parametros que le voy a enviar (sentencia sql)
            pst.setString(1, valSearch);
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                productos.add(new Producto(rs.getInt("idProducto"), rs.getString("nombreProducto"), rs.getString("descripcion"), rs.getString("tipoTelaje"), rs.getString("ubicacionBodega"), rs.getDouble("precioMC"), rs.getDouble("stock"), rs.getString("imagenProducto"), rs.getString("razonSocial")));
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
        return productos;
    }

    public Producto getProducto(int id) {
        Producto producto = null;
        PreparedStatement pst = null;
        ResultSet rs = null;
        try {
            String sql = "call selectProduct(?)";
            pst = getConnection().prepareCall(sql);
            pst.setInt(1, id);
            rs = pst.executeQuery();
            while (rs.next()) {
                producto = new Producto(rs.getInt("idProducto"), rs.getString("nombreProducto"), rs.getString("descripcion"), rs.getString("tipoTelaje"), rs.getString("ubicacionBodega"), rs.getDouble("precioMC"), rs.getDouble("stock"), rs.getString("imagenProducto"), rs.getString("razonSocial"));
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
        return producto;
    }

    public boolean crearProducto(Producto p) {

        boolean flag = false;
        try {
            String sql = "call insertProduct(?,?,?,?,?,?,?,?)";
            pst = getConnection().prepareStatement(sql);
            pst.setString(1, p.getNombre());
            pst.setString(2, p.getDescripcion());
            pst.setString(3, p.getTelaje());
            pst.setString(4, p.getUbicacion());
            pst.setDouble(5, p.getPrecio());
            pst.setDouble(6, p.getStock());
            pst.setString(7, p.getImg());
            pst.setInt(8, p.getIdProveedor());

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
// mentodo para actualizar el stock de un producto en los casos donde se realice un compra de producto a
// los proveedores o en el caso en el que se realice una venta a un cliente final

    public boolean updateStockProducto(int idProducto, Double stock) {
        boolean flag = false;

        try {
            String sql = "call updateStockProducto(?,?)";
            pst = getConnection().prepareCall(sql);
            pst.setInt(1, idProducto);
            pst.setDouble(2, stock);
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

    public boolean deleteProducto(int idProducto) {
        boolean flag = false;

        try {
            String sql = "call deleteProduct(?)";
            pst = getConnection().prepareCall(sql);
            pst.setInt(1, idProducto);
            if (pst.executeUpdate() == 1) {
                flag = true;
            } else if (pst.executeUpdate() == 1) {

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

    public boolean updateProducto(Producto p) {

        boolean flag = false;
        try {
            String sql = "call updateProduct(?,?,?,?,?,?)";
            pst = getConnection().prepareStatement(sql);
            pst.setInt(1, p.getId());
            pst.setString(2, p.getNombre());
            pst.setString(3, p.getTelaje());
            pst.setString(4, p.getUbicacion());
            pst.setDouble(5, p.getPrecio());
            pst.setDouble(6, p.getStock());

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
        String var1 = "Hola";
        String var2 = "peee";
        if (var1.indexOf(var2) == -1) {
            System.out.println("Encontrado");
        } else {
            System.out.println("No Encontrado");
        }
    }

}
