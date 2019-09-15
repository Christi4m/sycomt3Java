/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;
//llamando librerias o clases

import classes.Producto;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Cristian
 */
public class ModeloProductoDAO extends Conexion {

    PreparedStatement pst = null;//Abre flujo y manda parametros

    public ArrayList<Producto> getAllProductos() {//creo el metodo producto de tipo arraylist
        ArrayList<Producto> productos = new ArrayList<>();//creando el arraylist de tipo producto
        ResultSet rs = null;// trae el resultado de lo que haga en la base de datos
        try {
            String sql = "call selectProducts()";//crea la sentencia sql que voy a mandar a la base de datos
            pst = getConnection().prepareCall(sql);//abriendo la conexión a la base de datos y los parametros que le voy a enviar (sentencia sql)
            rs = pst.executeQuery();//ejecutar la sentencia y trae un resultado
            while (rs.next()) {//ciclo repetitivo que llena el array list con los datos que trae la base de datos
                productos.add(new Producto(rs.getInt("idProducto"), rs.getString("nombreProducto"), rs.getString("descripcionProducto"), rs.getString("tipoTelaje"), rs.getString("ubicacionBodega"), rs.getDouble("precioMC"), rs.getDouble("stock"), rs.getString("imagenProducto"),rs.getString("razonSocial")));
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
                producto = new Producto(rs.getInt("idProducto"), rs.getString("nombreProducto"), rs.getString("descripcionProducto"), rs.getString("tipoTelaje"), rs.getString("ubicacionBodega"), rs.getDouble("precioMC"), rs.getDouble("stock"), rs.getString("imagenProducto"), rs.getString("razonSocial"));
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

    public boolean deleteProducto(int idProducto) {
        boolean flag = false;

        try {
            String sql = "call deleteProduct(?)";
            pst = getConnection().prepareCall(sql);
            pst.setInt(1, idProducto);
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

    public boolean updateProducto(Producto p) {

        boolean flag = false;
        try {
            String sql = "call updateProduct(?,?,?,?,?,?,?)";
            pst = getConnection().prepareStatement(sql);
            pst.setInt(1, p.getId());
            pst.setString(2, p.getNombre());
            pst.setString(3, p.getDescripcion());
            pst.setString(4, p.getTelaje());
            pst.setString(5, p.getUbicacion());
            pst.setDouble(6, p.getPrecio());
            pst.setDouble(7, p.getStock());

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
        ModeloProductoDAO mp = new ModeloProductoDAO();
        Producto producto = (Producto) mp.getProducto(20);

        System.out.println(producto.getNombre());
    }

}
