/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controllers;

import classes.Producto;
import classes.Tercero;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import models.ProductoDAO;
import models.TerceroDAO;


public class controllerLogin extends HttpServlet {

   
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();// Clase utilizada para imprimir texto u objetos en el servlet
        HttpSession sesion = request.getSession(true);
        String action = request.getParameter("action");
        switch (action) {
            case "loginUser":
                String userAccess = request.getParameter("userAccess");
                String passwordAccess = request.getParameter("paswordAccess");
                TerceroDAO mc = new TerceroDAO();
                Tercero c = new Tercero(userAccess, passwordAccess);

                if (mc.loginUser(c)) {
                    //variable de tipo sesion creada o utilizada en caso tal de que el usuario este registrado en el sistema

                    TerceroDAO mcd = new TerceroDAO();
                    Tercero tercero = (Tercero) mcd.getTercero(userAccess);
                    sesion.setAttribute("typeTercero", tercero.getTypeUser());
                    sesion.setAttribute("firstName", tercero.getFirstName());
                    sesion.setAttribute("idUser", tercero.getId());
                    sesion.setAttribute("typeId", tercero.getTypeId());
                    sesion.setAttribute("numId", tercero.getNumId());
                    sesion.setAttribute("address", tercero.getAddress());
                    sesion.setAttribute("nameUser", tercero.getFirstName() + " " + tercero.getSecondName() + " " + tercero.getFirstLastName() + " " + tercero.getSecondLastName());

                    out.print("1");
                } else {
                    out.print("0");
                }
                break;
            case "validarLogin":

                Object firstName = sesion.getAttribute("firstName") == null ? null : sesion.getAttribute("firstName");
                if (firstName != null) {
                    out.print("1");
                } else {
                    out.print("0");
                }
                break;
            case "obtenerRol":

                out.print(sesion.getAttribute("typeTercero").toString());
                break;
            case "logOut": 

                sesion.invalidate();
                out.print("1");
            break;  
            case "dateJson": 
                JsonObject gson = new JsonObject();
                JsonArray array = new JsonArray();
                
                JsonObject item = new JsonObject();
                item.addProperty("typeTercero", sesion.getAttribute("typeTercero").toString()); // add property ,, agregar propiedad al objeto json 
                item.addProperty("firstName", sesion.getAttribute("firstName").toString());
                item.addProperty("idUser", sesion.getAttribute("idUser").toString());
                item.addProperty("typeId", sesion.getAttribute("typeId").toString());
                item.addProperty("numId", sesion.getAttribute("numId").toString());
                item.addProperty("address", sesion.getAttribute("address").toString());
                item.addProperty("nameUser", sesion.getAttribute("nameUser").toString());

                array.add(item);
                gson.add("datos", array);

                out.print(gson.toString());
            
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
