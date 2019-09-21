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
public class ModeloProductoDAOTest {
    
    public ModeloProductoDAOTest() {
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
     * Test of getAllProductos method, of class ProductoDAO.
     */
//    @Test
//    public void testGetAllProductos() {
//        System.out.println("getAllProductos");
//        ProductoDAO instance = new ProductoDAO();
//        ArrayList<Producto> expResult = null;
//        ArrayList<Producto> result = instance.getAllProductos();
//        assertEquals(expResult, result);
//        // TODO review the generated test code and remove the default call to fail.
//        fail("The test case is a prototype.");
//    }
//
//    /**
//     * Test of getProducto method, of class ProductoDAO.
//     */
//    @Test
//    public void testGetProducto() {
//        System.out.println("getProducto");
//        int id = 0;
//        ProductoDAO instance = new ProductoDAO();
//        Producto expResult = null;
//        Producto result = instance.getProducto(id);
//        assertEquals(expResult, result);
//        // TODO review the generated test code and remove the default call to fail.
//        fail("The test case is a prototype.");
//    }
//
//    /**
//     * Test of crearProducto method, of class ProductoDAO.
//     */
//    @Test
//    public void testCrearProducto() {
//        System.out.println("crearProducto");
//        Producto p = null;
//        ProductoDAO instance = new ProductoDAO();
//        boolean expResult = false;
//        boolean result = instance.crearProducto(p);
//        assertEquals(expResult, result);
//        // TODO review the generated test code and remove the default call to fail.
//        fail("The test case is a prototype.");
//    }
//
//    /**
//     * Test of deleteProducto method, of class ProductoDAO.
//     */
    @Test
    public void testDeleteProducto() {
        System.out.println("deleteProducto");
        int idProducto = 35;
        ProductoDAO instance = new ProductoDAO();
        boolean expResult = true;
        boolean result = instance.deleteProducto(idProducto);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

//    /**
//     * Test of updateProducto method, of class ProductoDAO.
//     */
//    @Test
//    public void testUpdateProducto() {
//        System.out.println("updateProducto");
//        Producto p = null;
//        ProductoDAO instance = new ProductoDAO();
//        boolean expResult = false;
//        boolean result = instance.updateProducto(p);
//        assertEquals(expResult, result);
//        // TODO review the generated test code and remove the default call to fail.
//        fail("The test case is a prototype.");
//    }
//
//    /**
//     * Test of main method, of class ProductoDAO.
//     */
//    @Test
//    public void testMain() {
//        System.out.println("main");
//        String[] args = null;
//        ProductoDAO.main(args);
//        // TODO review the generated test code and remove the default call to fail.
//        fail("The test case is a prototype.");
//    }
    
}
