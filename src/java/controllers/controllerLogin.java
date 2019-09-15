/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controllers;

import classes.Tercero;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import models.ModeloTerceroDAO;

/**
 *
 * @author Aprendiz
 */
public class controllerLogin extends HttpServlet {

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
        PrintWriter out = response.getWriter();// Clase utilizada para imprimir texto u objetos en el servlet
         HttpSession sesion = request.getSession(true);
        String action = request.getParameter("action");
        switch (action) {
            case "loginUser":
                String userAccess = request.getParameter("userAccess");
                String passwordAccess = request.getParameter("paswordAccess");
                ModeloTerceroDAO mc = new ModeloTerceroDAO();
                Tercero c = new Tercero(userAccess, passwordAccess);

                if (mc.loginUser(c)) {
                    //variable de tipo sesion creada o utilizada en caso tal de que el usuario este registrado en el sistema
                   
                    ModeloTerceroDAO mcd = new ModeloTerceroDAO();
                    Tercero tercero = (Tercero) mcd.getTercero(userAccess);
                    sesion.setAttribute("typeTercero", tercero.getTypeUser());
                    sesion.setAttribute("firstName", tercero.getFirstName());
                    sesion.setAttribute("idCliente", tercero.getId());
                    sesion.setAttribute("typeId", tercero.getTypeId());
                    sesion.setAttribute("numId", tercero.getNumId());
                    sesion.setAttribute("nameCliente", tercero.getFirstName() + " " + tercero.getSecondName() + " " + tercero.getFirstLastName() + " " + tercero.getSecondLastName());

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
            case "logOut":{
                sesion.invalidate();
                out.print("1");
            }    

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
