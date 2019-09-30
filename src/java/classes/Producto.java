    /*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package classes;

import java.io.InputStream;
import java.sql.Blob;

/**
 *
 * @author Jonathan
 */
public class Producto {
    
    private int id;
    private String nombre;
    private String descripcion;
    private String telaje;    
    private String ubicacion;   
    private double precio;
    private double stock;
    private String img;
    private int idProveedor;
    private String proveedor;
 

    public Producto() {
    }

    public Producto(String nombre, String descripcion, String telaje, String ubicacion, double precio, double stock, String img, int idProveedor) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.telaje = telaje;
        this.ubicacion = ubicacion;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
        this.idProveedor = idProveedor;
    }

 

    public Producto(int id, String nombre, String descripcion,String telaje, String ubicacion, double precio, double stock, String img,String proveedor) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.telaje = telaje;
        this.ubicacion = ubicacion;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
        this.proveedor = proveedor;
    }
    public Producto(int id, String nombre,  String telaje, String ubicacion, double precio, double stock) {
        this.id = id;
        this.nombre = nombre;
        this.telaje = telaje;
        this.ubicacion = ubicacion;
        this.precio = precio;
        this.stock = stock;
        
    }

    

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getTelaje() {
        return telaje;
    }

    public void setTelaje(String telaje) {
        this.telaje = telaje;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public double getStock() {
        return stock;
    }

    public void setStock(double stock) {
        this.stock = stock;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public int getIdProveedor() {
        return idProveedor;
    }

    public void setIdProveedor(int idProveedor) {
        this.idProveedor = idProveedor;
    }

    public String getProveedor() {
        return proveedor;
    }

    public void setProveedor(String proveedor) {
        this.proveedor = proveedor;
    }

    

    
    

   
    
}
