/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;

import classes.Compras;
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
public class ComprasDaoTest {
    
    public ComprasDaoTest() {
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
     * Test of newShop method, of class ComprasDao.
     */
    @Test
    public void testNewShop() {
        System.out.println("newShop");
        Compras c = new Compras(0, "07-10-2019", "Prueba testing", 20000.00, 7, 0, 0, 0, "Realizada");
        ComprasDao instance = new ComprasDao();
        boolean expResult = true;
        boolean result = false;
        if(instance.newShop(c)){
            result = true;
        }
        assertEquals(expResult, result);
        
        
    }

    /**
     * Test of newDetailShop method, of class ComprasDao.
     */
    @Test
    public void testNewDetailShop() {
        System.out.println("newDetailShop");
        Compras c = new Compras(25, "", "", 0, 0, 28, 23, 50000, "");
        ComprasDao instance = new ComprasDao();
        boolean expResult = true;
        boolean result = instance.newDetailShop(c);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        
    }

    /**
     * Test of idCompras method, of class ComprasDao.
     */
    @Test
    public void testIdCompras() {
        System.out.println("idCompras");
        ComprasDao instance = new ComprasDao();
        int expResult = 37;
        int result = instance.idCompras();
        assertEquals(expResult, result);
        
        
    }

   
    
}
