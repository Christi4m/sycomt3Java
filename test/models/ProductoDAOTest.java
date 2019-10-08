/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;

import classes.Producto;
import java.util.ArrayList;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author ADMIN
 */
public class ProductoDAOTest {
    
    public ProductoDAOTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }

    
    /**
     * Test of crearProducto method, of class ProductoDAO.
     */
    @Test
    public void testCrearProducto() {
        System.out.println("crearProducto");
        Producto p = new Producto("seda-marron", "prueba testing", "Seda", "prueba", 12000.00, 300.00, "images/productos/sro1.jpg", 7);
        ProductoDAO instance = new ProductoDAO();
        boolean expResult = false;
        boolean result = instance.crearProducto(p);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        
    }

    /**
     * Test of updateStockProducto method, of class ProductoDAO.
     */
    @Test
    public void testUpdateStockProducto() {
        System.out.println("updateStockProducto");
        int idProducto = 28;
        Double stock = 350.00;
        ProductoDAO instance = new ProductoDAO();
        boolean expResult = true;
        boolean result = instance.updateStockProducto(idProducto, stock);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        
    }

    /**
     * Test of deleteProducto method, of class ProductoDAO.
     */
    @Test
    public void testDeleteProducto() {
        System.out.println("deleteProducto");
        int idProducto = 31;
        ProductoDAO instance = new ProductoDAO();
        boolean expResult = false;
        boolean result = instance.deleteProducto(idProducto);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        
    }

    /**
     * Test of updateProducto method, of class ProductoDAO.
     */
    @Test
    public void testUpdateProducto() {
        System.out.println("updateProducto");
        Producto p = new Producto(28,"Seda-Rosa", "prueba testing1", "Seda", "prueba", 12000.00, 300.00, "images/productos/sro1.jpg", "");
        ProductoDAO instance = new ProductoDAO();
        boolean expResult = true;
        boolean result = instance.updateProducto(p);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        
    }

    
}
