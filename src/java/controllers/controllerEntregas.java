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
import models.EntregasDAO;
import models.VentasDAO;

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
                EntregasDAO modelo1 = new EntregasDAO();
                Entregas entrega1 = new Entregas(request.getParameter("fechaEntrega"), Integer.parseInt(request.getParameter("Factura")), Integer.parseInt(request.getParameter("mesajeroAsignar")), "Asignada");
                if (!modelo1.generarEntrega(entrega1)) {
                    VentasDAO modelo9 = new VentasDAO();
                    if (!modelo9.ProcesarVenta(Integer.parseInt(request.getParameter("Ventas")), "Asignada")) {
                        res = 1;
                        out.print(res);
                    } else {
                        out.print(res);
                    }
                } else {
                    out.print(res);
                }
                break;

            case "listEntregasAsignadas":
                JsonObject gsonLE1 = new JsonObject();
                JsonArray arrayLE1 = new JsonArray();

                EntregasDAO modelo9 = new EntregasDAO();
                for (Entregas entregas4 : modelo9.getAllEntregasAsignadas()) {
                    JsonObject item = new JsonObject();

                    item.addProperty("idEntrega", entregas4.getId());
                    item.addProperty("fechaEntrega", entregas4.getFechaEntrega());
                    item.addProperty("idOrdenVenta", entregas4.getIdOrdenVenta());
                    item.addProperty("Factura", "<a class='idFactura' id='" + entregas4.getIdOrdenVenta() + "' role=\"button\" href=\"#\">" + entregas4.getNumFactura() + " </a>");
                    item.addProperty("numFactura", entregas4.getNumFactura());
                    item.addProperty("Mensajero", "<a class='idCliente' id='" + entregas4.getIdMensajero() + "' role=\"button\" href=\"#\">" + entregas4.getIdMensajero() + " </a>");
                    item.addProperty("idMensajero", entregas4.getIdMensajero());
                    item.addProperty("valorGlobal", entregas4.getValorGlobal());
                    item.addProperty("zona", entregas4.getZona());
                    item.addProperty("Cliente", "<a class='idCliente' id='" + entregas4.getIdCliente() + "' role=\"button\" href=\"#\">" + entregas4.getIdCliente() + " </a>");
                    item.addProperty("idCliente", entregas4.getIdCliente());
                    item.addProperty("acciones", "<button id='" + entregas4.getId() + "'class='btn btnDetalles btn-primary fa fa-eye''></button>");

                    arrayLE1.add(item);
                }

                gsonLE1.add("datos", arrayLE1);

                out.print(gsonLE1.toString());
                break;
            case "listEntregasAsignadasFin":
                JsonObject gsonLE2 = new JsonObject();
                JsonArray arrayLE2 = new JsonArray();

                EntregasDAO modelo10 = new EntregasDAO();
                for (Entregas entregas4 : modelo10.getAllEntregasAsignadas()) {
                    JsonObject item = new JsonObject();
                    if (entregas4.getIdMensajero() == Integer.parseInt(request.getParameter("idMensajero")) 
                            && entregas4.getEstadoEntrega().equalsIgnoreCase(request.getParameter("Estado"))) {
                        item.addProperty("idEntrega", entregas4.getId());
                        item.addProperty("fechaEntrega", entregas4.getFechaEntrega());
                        item.addProperty("idOrdenVenta", entregas4.getIdOrdenVenta());
                        item.addProperty("Factura", "<a class='idFactura' id='" + entregas4.getIdOrdenVenta() + "' role=\"button\" href=\"#\">" + entregas4.getNumFactura() + " </a>");
                        item.addProperty("numFactura", entregas4.getNumFactura());
                        item.addProperty("Mensajero", "<a class='idCliente' id='" + entregas4.getIdMensajero() + "' role=\"button\" href=\"#\">" + entregas4.getIdMensajero() + " </a>");
                        item.addProperty("idMensajero", entregas4.getIdMensajero());
                        item.addProperty("valorGlobal", entregas4.getValorGlobal());
                        item.addProperty("zona", entregas4.getZona());
                        item.addProperty("Cliente", "<a class='idCliente' id='" + entregas4.getIdCliente() + "' role=\"button\" href=\"#\">" + entregas4.getIdCliente() + " </a>");
                        item.addProperty("idCliente", entregas4.getIdCliente());
                        if(entregas4.getEstadoEntrega().equalsIgnoreCase("Asignada")){
                            
                        item.addProperty("acciones", "<button id='" + entregas4.getIdOrdenVenta() + "'class='btn btnDetalles btn-primary fa fa-eye''></button><button id='" + entregas4.getIdOrdenVenta() + "'class='btn btnCompletar btn-success fa fa-check''></button>");
                        }else{
                            
                        item.addProperty("acciones", "<button id='" + entregas4.getIdOrdenVenta() + "'class='btn btnDetalles btn-primary fa fa-eye''></button>");
                        }

                        arrayLE2.add(item);
                    }
                }

                gsonLE2.add("datos", arrayLE2);

                out.print(gsonLE2.toString());
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
