/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controllers;

import classes.Correos;
import classes.Producto;
import classes.Proveedores;
import classes.Tercero;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import models.ProductoDAO;
import models.ProveedoresDAO;
import models.TerceroDAO;

@MultipartConfig
public class controllerCorreos extends HttpServlet {

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
            case "sendMasivos":

                // seccion de codigo para archivo adjunto
                InputStream inputStream = null;
                OutputStream outputStream = null;
                String rutaArchivo = "";
                String mensaje = "";
                String fileName = "";

                try {
                    inputStream = request.getPart("Adjunto").getInputStream(); //leemos el fichero local
                    if (inputStream.available() != 0) {

                        fileName = request.getPart("Adjunto").getSubmittedFileName();

                        // write the inputStream to a FileOutputStream
                        outputStream = new FileOutputStream(new File("C:\\Users\\ADMIN\\Documents\\sycomt3\\sycomt3Java\\web\\AdjuntosEmail\\" + fileName));

                        int read = 0;
                        byte[] bytes = new byte[1024];

                        while ((read = inputStream.read(bytes)) != -1) {
                            outputStream.write(bytes, 0, read);
                        }
                        rutaArchivo = getServletContext().getRealPath("")+ "\\AdjuntosEmail\\"+fileName;
                    } 

                    //Seccion de codigo para listar los emails masivos
                    String destino = request.getParameter("Destinatarios");
                    ArrayList<String> email = new ArrayList<>();

                    if (destino.equalsIgnoreCase("Clientes")) {
                        TerceroDAO modelo1 = new TerceroDAO();
                        for (Tercero emails1 : modelo1.listEmailClientes()) {
                            email.add(emails1.getEmail());
                        }
                    } else if (destino.equalsIgnoreCase("Empleados")) {
                        TerceroDAO modelo1 = new TerceroDAO();
                        for (Tercero emails1 : modelo1.getAllEmpleados()) {
                            email.add(emails1.getEmail());
                        }
                    } else if (destino.equalsIgnoreCase("Proveedores")) {
                        ProveedoresDAO modelo1 = new ProveedoresDAO();
                        for (Proveedores emails1 : modelo1.getAllProveedores()) {
                            email.add(emails1.getEmailP());
                        }
                    }
                  
                    
                    correosClass cm = new correosClass();
                    
                    Correos cc = new Correos("sycomt3A@gmail.com", "ealvrtizdmmxvsgp", rutaArchivo, fileName,
                            "sycomt3A@gmail.com", request.getParameter("Asunto"), request.getParameter("Mensaje"),
                            email);

                    if (cm.correoMasivos(cc)) {
                        out.print("1");
                    } else {
                        out.print("0");
                    }
                } finally {
                    if (inputStream != null) {
                        inputStream.close();
                    }
                    if (outputStream != null) {
                        outputStream.close();
                    }
                }

                break;
            default:
                out.print("Error caso no encontrado");
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
