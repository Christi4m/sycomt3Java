/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controllers;

import classes.Tercero;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import models.ModeloTerceroDAO;
import models.ModeloProductoDAO;

/**
 *
 * @author Christiam
 */
@MultipartConfig
public class controllerTercero extends HttpServlet { // CLASE DEL SERVLET //

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response) // UN METODO DEL SERVLET // 
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        request.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();
        String action = request.getParameter("accion");

        switch (action) {
            //caso para crear un cliente en el sistema
            case "create":
                ModeloTerceroDAO modelo1 = new ModeloTerceroDAO();
                Tercero tercero1 = new Tercero(0, "Cliente", request.getParameter("typeId"), Integer.parseInt(request.getParameter("numId")),
                        request.getParameter("firstName"), request.getParameter("secondName"), request.getParameter("firstLastName"),
                        request.getParameter("secondLastName"), request.getParameter("email"), request.getParameter("numCellPhone"),
                        request.getParameter("numLandLine"), request.getParameter("address"), request.getParameter("detailsAddress"),
                        request.getParameter("userAccess"), request.getParameter("passwordAccess"));
                if (modelo1.createClient(tercero1)) {
                    out.print("0");
                } else {
                    out.print("1");
                }
                break;
            // caso para listar a un cliente por su id   
            case "listClientId":
                JsonObject gson = new JsonObject();
                JsonArray array = new JsonArray();

                ModeloTerceroDAO modelo2 = new ModeloTerceroDAO();
                Tercero tercero2 = (Tercero) modelo2.getTerceroId(Integer.parseInt(request.getParameter("idCliente")));
                JsonObject item = new JsonObject();
                item.addProperty("tipoId", tercero2.getTypeId());
                item.addProperty("numId", tercero2.getNumId());
                item.addProperty("name", tercero2.getFirstName() + " " + tercero2.getSecondName() + " " + tercero2.getFirstLastName() + " " + tercero2.getSecondLastName());
                item.addProperty("email", tercero2.getEmail());
                item.addProperty("numCellPhone", tercero2.getNumCellPhone());
                item.addProperty("address", tercero2.getAddress());
                item.addProperty("details", tercero2.getDetailsAddress());

                array.add(item);
                gson.add("datos", array);

                out.print(gson.toString());

                break;
            // caso para crear un empleado en el sistema
            case "crearEmpleado":

                ModeloTerceroDAO modelo3 = new ModeloTerceroDAO();
                Tercero empleado = new Tercero(request.getParameter("typeUser"), request.getParameter("tipoIdentificacionEmpleado"), Integer.parseInt(request.getParameter("identificacionTercero")), request.getParameter("firstName"), request.getParameter("secondName"), request.getParameter("firstLastName"), request.getParameter("secondLastName"), request.getParameter("email"), request.getParameter("numCellPhone"), request.getParameter("numLandLine"), request.getParameter("address"), request.getParameter("tipoContrato"), request.getParameter("numContrato"), request.getParameter("fechaInicioContrato"), request.getParameter("FechaFinContrato"), request.getParameter("estadoCivil"), request.getParameter("numHijos"), request.getParameter("eps"), request.getParameter("pensiones"), request.getParameter("cesantias"), request.getParameter("arl"), request.getParameter("cajaCompensacion"), "Activo");
                if (modelo3.insertEmpleado(empleado)) {
                    out.print("1");
                } else {
                    out.print("0");
                }
                break;
            //caso para listar a todos lo empleados registrados en el sistema
            case "listarEmpleados":
                JsonObject gsonLE = new JsonObject();
                JsonArray arrayLE = new JsonArray();

                ModeloTerceroDAO modelo4 = new ModeloTerceroDAO();
                for (Tercero empleado1 : modelo4.getAllEmpleados()) {
                    JsonObject itemLE = new JsonObject(); // tabla tiene filas y columnas , tiene datos de tipo json 
                    itemLE.addProperty("id", empleado1.getId());
                    itemLE.addProperty("numId", empleado1.getNumId());
                    itemLE.addProperty("name", empleado1.getFirstName() + " " + empleado1.getSecondName() + " " + empleado1.getFirstLastName() + " " + empleado1.getSecondLastName());
                    itemLE.addProperty("email", empleado1.getEmail());
                    itemLE.addProperty("numCellPhone", empleado1.getNumCellPhone());
                    itemLE.addProperty("typeTercero", empleado1.getTypeUser());
                    itemLE.addProperty("estadoTercero", empleado1.getEstadoTercero());
                    itemLE.addProperty("acciones", "<button id='" + empleado1.getId() + "'class='btn btnDetalles btn-primary fa fa-eye''></button><button id='" + empleado1.getId() + "'class='btn btnInsertUserAccess btn-light fa fa-key' style='border: solid gray 1px;'></button><button id='" + empleado1.getId() + "' class='btn btnEliminar fa fa-ban btn-danger text-left' data-toggle='modal' data-target='#modalEliminar'></button>");
                    arrayLE.add(itemLE);

                }
                gsonLE.add("datos", arrayLE);
                out.print(gsonLE.toString());
                break;

            //caso para listar todos los datosetalle de un empleado
            case "listarDetalleEmpleado":

                ModeloTerceroDAO modelo5 = new ModeloTerceroDAO();
                Tercero empleado2 = (Tercero) modelo5.getDetailsEmpleado(Integer.parseInt(request.getParameter("idDetails")));
                JsonObject gsonLDE = new JsonObject();
                JsonArray arrayLDE = new JsonArray();

                JsonObject itemLDE = new JsonObject();
                itemLDE.addProperty("tipoContrato", empleado2.getTipoContrato());
                itemLDE.addProperty("numContrato", empleado2.getNumContrato());
                itemLDE.addProperty("fechaInicio", empleado2.getFechaInicioContrato());
                itemLDE.addProperty("fechaFin", empleado2.getFechafinContrato());
                itemLDE.addProperty("estadoCivil", empleado2.getEstadoCivil());
                itemLDE.addProperty("numHijos", empleado2.getNumHijos());
                itemLDE.addProperty("eps", empleado2.getEps());
                itemLDE.addProperty("pensiones", empleado2.getPensiones());
                itemLDE.addProperty("cesantias", empleado2.getCesantias());
                itemLDE.addProperty("arl", empleado2.getArl());
                itemLDE.addProperty("cajaCompensacion", empleado2.getCajaCompensacion());
                arrayLDE.add(itemLDE);
                gsonLDE.add("datos", arrayLDE);
                out.print(gsonLDE.toString());
                break;

            case "insertUserAccesEmpleado":
                //caso para asignarle usuario y contraseña a un empleado para que pueda acceder al sistema en caso de ser necesario
                Tercero empleado3 = new Tercero(Integer.parseInt(request.getParameter("idEmpleado")), request.getParameter("userAccess"), request.getParameter("passwordAccess"));
                ModeloTerceroDAO modelo6 = new ModeloTerceroDAO();
                if (modelo6.insertUserAccesEmpleado(empleado3)) {
                    out.print("1");
                } else {
                    out.print("0");
                }
                break;
            case "validarUserAcces":
                ModeloTerceroDAO modelo7 = new ModeloTerceroDAO();
                if (modelo7.validarUserAccess(Integer.parseInt(request.getParameter("idEmpleado")))) {
                    out.print("1");
                } else {
                    out.print("0");
                }
                break;
            case "listarMensajeros":
                JsonObject gsonLM = new JsonObject();
                JsonArray arrayLM = new JsonArray();

                ModeloTerceroDAO modelo8 = new ModeloTerceroDAO();
                for (Tercero empleado1 : modelo8.getAllEmpleados()) {

                    JsonObject itemLE = new JsonObject(); // tabla tiene filas y columnas , tiene datos de tipo json 
                    if (empleado1.getTypeUser().equalsIgnoreCase("Mensajero")) {
                        itemLE.addProperty("id", empleado1.getId());
                        itemLE.addProperty("numId", empleado1.getNumId());
                        itemLE.addProperty("name", empleado1.getFirstName() + " " + empleado1.getSecondName() + " " + empleado1.getFirstLastName() + " " + empleado1.getSecondLastName());
                        itemLE.addProperty("email", empleado1.getEmail());
                        itemLE.addProperty("numCellPhone", empleado1.getNumCellPhone());
                        itemLE.addProperty("estadoTercero", empleado1.getEstadoTercero());
                        itemLE.addProperty("acciones", "<button id='" + empleado1.getId() + "' class='btn btnAsignarZona fa fa-map-marker btn-success text-left' data-toggle='' data-target='#'></button>");
                        arrayLM.add(itemLE);
                    }
                }
                gsonLM.add("datos", arrayLM);
                out.print(gsonLM.toString());
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
