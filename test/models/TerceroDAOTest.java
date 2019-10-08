/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;

import classes.Tercero;
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
public class TerceroDAOTest {
    
    public TerceroDAOTest() {
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
     * Test of createClient method, of class TerceroDAO.
     */
    @Test
    public void testCreateClient() {
        System.out.println("createClient");
        Tercero c = new Tercero(0, "Cliente", "C.C", 1030669070, "Andres", "", "Prueba", "Testing", 
                "Prueba@prueba.com", "3154752091", "0000000", "Chapinero", "Cahpinero", "Prueba", "prueba", 
                "andresTesting", "12345", "zona1");
        TerceroDAO instance = new TerceroDAO();
        boolean expResult = true;
        boolean result = instance.createClient(c);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        
    }

    /**
     * Test of insertEmpleado method, of class TerceroDAO.
     */
    @Test
    public void testInsertEmpleado() {
        System.out.println("insertEmpleado");
        Tercero te = new Tercero("Mensajero", "C.C", 123456, "Mensajero", "Prueba", "Prueba", "Prueba", "PruebaTes@prueba.com", 
                "3124567865", "2345678", "prueba", "Indefinido", "34", "23-10-19", "", "Soltero", "0", "Compensar",
                "Proteccion", "Proteccion", "sura", "Compensar", "Activo");
        TerceroDAO instance = new TerceroDAO();
        boolean expResult = true;
        boolean result = instance.insertEmpleado(te);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        
    }

    

    /**
     * Test of loginUser method, of class TerceroDAO.
     */
    @Test
    public void testLoginUser() {
        System.out.println("loginUser");
        Tercero c = new Tercero("Harold", "12345");
        TerceroDAO instance = new TerceroDAO();
        boolean expResult = true;
        boolean result = instance.loginUser(c);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        
    }

    /**
     * Test of validarUserAccess method, of class TerceroDAO.
     */
    @Test
    public void testValidarUserAccess() {
        System.out.println("validarUserAccess");
        int id = 2;
        TerceroDAO instance = new TerceroDAO();
        boolean expResult = true;
        boolean result = instance.validarUserAccess(id);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        
    }

   
    /**
     * Test of insertUserAccesEmpleado method, of class TerceroDAO.
     */
    @Test
    public void testInsertUserAccesEmpleado() {
        System.out.println("insertUserAccesEmpleado");
        Tercero userAccessEmpleado = new Tercero(29, "pruebatest", "12345");
        TerceroDAO instance = new TerceroDAO();
        boolean expResult = true;
        boolean result = instance.insertUserAccesEmpleado(userAccessEmpleado);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        
    }

    /**
     * Test of updateZonaEntrega method, of class TerceroDAO.
     */
    @Test
    public void testUpdateZonaEntrega() {
        System.out.println("updateZonaEntrega");
        int idMensajero = 27;
        String zona = "zona2";
        TerceroDAO instance = new TerceroDAO();
        boolean expResult = true;
        boolean result = instance.updateZonaEntrega(idMensajero, zona);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        
    }

    
    
}
