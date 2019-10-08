/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;

import classes.Proveedores;
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
public class ProveedoresDAOTest {
    
    public ProveedoresDAOTest() {
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
     * Test of crearProveedor method, of class ProveedoresDAO.
     */
    @Test
    public void testCrearProveedor() {
        System.out.println("crearProveedor");
        Proveedores p = new Proveedores("Testing Prueba", "123456", "prueba@prueba.com", "3214567654", "4567890", "Direccion", "Felipe Aguilar", "Activo");
        ProveedoresDAO instance = new ProveedoresDAO();
        boolean expResult = true;
        boolean result = instance.crearProveedor(p);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        
    }

    /**
     * Test of UpdateProveedor method, of class ProveedoresDAO.
     */
    @Test
    public void testUpdateProveedor() {
        System.out.println("UpdateProveedor");
        Proveedores p = new Proveedores(7, "TelasClar", "prueba@prueba.com", "3157686521", "000", "jshjd", "Cristian Bohorquez");
        ProveedoresDAO instance = new ProveedoresDAO();
        boolean expResult = true;
        boolean result = instance.UpdateProveedor(p);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        
    }

    /**
     * Test of UpdateEstadoProveedor method, of class ProveedoresDAO.
     */
    @Test
    public void testUpdateEstadoProveedor() {
        System.out.println("UpdateEstadoProveedor");
        Proveedores p = new Proveedores(7, "Inactivo");
        ProveedoresDAO instance = new ProveedoresDAO();
        boolean expResult = true;
        boolean result = instance.UpdateEstadoProveedor(p);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        
    }

   
    
}
