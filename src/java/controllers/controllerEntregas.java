/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controllers;

import classes.Entregas;
import classes.Ventas;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import models.EntregasDao;
import models.VentasDao;

@MultipartConfig
public class controllerEntregas extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        request.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();

        String action = request.getParameter("accion");
        switch (action) {
            case "generarEntrega":
                int res = 0;
                EntregasDao modelo1 = new EntregasDao();
                Entregas entrega1 = new Entregas(request.getParameter("fechaEntrega"), Integer.parseInt(request.getParameter("Factura")), Integer.parseInt(request.getParameter("mesajeroAsignar")),"Asignada");
                if (modelo1.generarEntrega(entrega1)) {
                    VentasDao modelo9 = new VentasDao();
                    if (modelo9.ProcesarVenta(Integer.parseInt(request.getParameter("Ventas")), "Asignada")) {
                        res = 1;
                        out.print(res);
                    }else{
                        out.print(res);
                    }
                } else {
                    out.print(res);
                }
                break;
            case "datosEntrega":
                JsonObject gsonLE = new JsonObject();
                JsonArray arrayLE = new JsonArray();

                EntregasDao modelo8 = new EntregasDao();
                for (Entregas entregas4 : modelo8.getAllEntregasAsignadas(Integer.parseInt(request.getParameter("idFactura")))) {
                    JsonObject item = new JsonObject();
                    
                        item.addProperty("fechaEntrega", entregas4.getFechaEntrega());
                        item.addProperty("name", entregas4.getNameMensajero()+" "+entregas4.getNameMensajero1());
                        item.addProperty("numCellPhone", entregas4.getCelMensajero());
                        item.addProperty("email", entregas4.getEmailMensajero());
                        

                        arrayLE.add(item);
                    }

                
                gsonLE.add("datos", arrayLE);

                out.print(gsonLE.toString());
                break;
            default:
                break;
        }

    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
