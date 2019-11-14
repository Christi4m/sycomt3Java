/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;

import classes.Entregas;
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
public class EntregasDaoTest {
    
    public EntregasDaoTest() {
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
     * Test of generarEntrega method, of class EntregasDAO.
     */
    @Test
    public void testGenerarEntrega() {
        System.out.println("generarEntrega");
        Entregas entrega = new Entregas("2019-10-03", 1, 26, "Asignada");
        EntregasDAO instance = new EntregasDAO();
        boolean expResult = true;
        boolean result = instance.generarEntrega(entrega);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        
    }

    
   
}
