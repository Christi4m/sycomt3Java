/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;

import classes.Ventas;
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
public class VentasDaoTest {
    
    public VentasDaoTest() {
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
     * Test of generarNumSerie method, of class VentasDao.
     */
    @Test
    public void testGenerarNumSerie() {
        System.out.println("generarNumSerie");
        VentasDao instance = new VentasDao();
        String expResult = "00000017";
        String result = instance.generarNumSerie();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        
    }

    /**
     * Test of idVentas method, of class VentasDao.
     */
    @Test
    public void testIdVentas() {
        System.out.println("idVentas");
        VentasDao instance = new VentasDao();
        String expResult = "51";
        String result = instance.idVentas();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        
    }

    /**
     * Test of guardarVentas method, of class VentasDao.
     */
    @Test
    public void testGuardarVentas() {
        System.out.println("guardarVentas");
        Ventas v = new Ventas("08-10-2019", 30000.00, 1, "00000017", "En Despacho");
        VentasDao instance = new VentasDao();
        boolean expResult = true;
        boolean result = instance.guardarVentas(v);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        
    }

    /**
     * Test of guardarDetalleVenta method, of class VentasDao.
     */
    @Test
    public void testGuardarDetalleVenta() {
        System.out.println("guardarDetalleVenta");
        Ventas vent = new Ventas(46, 28, 24.00, 288000.00);
        VentasDao instance = new VentasDao();
        boolean expResult = true;
        boolean result = instance.guardarDetalleVenta(vent);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        
    }   
    

    /**
     * Test of deleteVenta method, of class VentasDao.
     */
    @Test
    public void testDeleteVenta() {
        System.out.println("deleteVenta");
        int idVenta = 34;
        VentasDao instance = new VentasDao();
        boolean expResult = true;
        boolean result = instance.deleteVenta(idVenta);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        
    }

    /**
     * Test of ProcesarVenta method, of class VentasDao.
     */
    @Test
    public void testProcesarVenta() {
        System.out.println("ProcesarVenta");
        int idVenta = 36;
        String estadoOrdenVenta = "Confirmada";
        VentasDao instance = new VentasDao();
        boolean expResult = true;
        boolean result = instance.ProcesarVenta(idVenta, estadoOrdenVenta);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        
    }

    /**
     * Test of insertFactura method, of class VentasDao.
     */
    @Test
    public void testInsertFactura() {
        System.out.println("insertFactura");
        String numFactura = "00000016";
        int idVenta = 46;
        VentasDao instance = new VentasDao();
        boolean expResult = true;
        boolean result = instance.insertFactura(numFactura, idVenta);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        
    }

   
    
}
