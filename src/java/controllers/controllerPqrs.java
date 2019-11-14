package controllers;

import classes.Pqrs;
import classes.numeroSerie;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.Calendar;
import java.util.GregorianCalendar;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import models.pqrsDAO;

@MultipartConfig
public class controllerPqrs extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        response.setContentType("text/html;charset=UTF-8");
        request.setCharacterEncoding("UTF-8");

        String action = request.getParameter("action");
        HttpSession sesion = request.getSession();//recuperar la variable de sesion para acceder a todos los datos del cleitne que estan guardados en la sesion
        switch (action) {
            case "create":
                // seccion de codigo para archivo adjunto
                InputStream inputStream = null;
                OutputStream outputStream = null;
                String CUN = "";
                String fileName = "";
                String rutaArchivo = "";
                String file2 = "";

                try {
                    //variable para obtener el id del usuario desde su sesion
                    int idCliente = Integer.parseInt(sesion.getAttribute("idUser").toString());

                    //seccion de codigo para generar el cun de la pqrs
                    pqrsDAO modelo0 = new pqrsDAO();
                    CUN = modelo0.generarCUN();
                    if (CUN == null) {
                        CUN = "00000001";
                    } else {
                        int incrementar = Integer.parseInt(CUN);
                        numeroSerie ns = new numeroSerie();
                        CUN = ns.numeroSerie(incrementar);
                    }

                    inputStream = request.getPart("filePqrs").getInputStream(); //leemos el fichero local

                    if (inputStream.available() != 0) {

                        fileName = request.getPart("filePqrs").getSubmittedFileName();

                        String fil[] = fileName.split("\\.");
//
                        file2 = CUN + "." + fil[1];
                        // write the inputStream to a FileOutputStream
                        rutaArchivo = getServletContext().getRealPath("") + "\\filePqrs\\" + fileName;
                        outputStream = new FileOutputStream(new File("C:\\Users\\ADMIN\\Documents\\sycomt3\\sycomt3Java\\web\\EvidencePqrs\\" + file2));

                        int read = 0;
                        byte[] bytes = new byte[1024];

                        while ((read = inputStream.read(bytes)) != -1) {
                            outputStream.write(bytes, 0, read);
                        }

                    }

                    //seccion de codigo que obtiene la fecha en la que se genera la pqrs
                    Calendar c = new GregorianCalendar();
                    String dia = Integer.toString(c.get(Calendar.DATE));
                    String mes = Integer.toString(c.get(Calendar.MONTH) + 1);
                    String annio = Integer.toString(c.get(Calendar.YEAR));
                    String fecha = dia + "-" + mes + "-" + annio;

                    //Seccion de codigo que crea el objeto de tipo pqrs para poder almacenar las datos obtenidos del 
                    //formulario en la base de datos
                    Pqrs pq1 = new Pqrs(0, request.getParameter("descriptionPqrs"), fecha, file2, CUN, idCliente,
                            request.getParameter("typePqrs"), "");

                    //instancia a la clase pqrsDAO para usar el metodo newPqrs que registrara la pqrs en la base de datos
                    pqrsDAO modelo1 = new pqrsDAO();

                    if (!modelo1.newPqrs(pq1)) {
                        out.print(CUN);
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
            case "read":
                JsonObject gson = new JsonObject();
                JsonArray array = new JsonArray();
                pqrsDAO modelo1 = new pqrsDAO();
                for (Pqrs pqrs1 : modelo1.listPqrs()) {
                    JsonObject item = new JsonObject();
                    item.addProperty("id", pqrs1.getId()); // add property ,, agregar propiedad al objeto json 
                    item.addProperty("description", pqrs1.getDescription());
                    item.addProperty("datePqrs", pqrs1.getDatePqrs());
                    item.addProperty("evidence", pqrs1.getEvidence());
                    item.addProperty("CUN", "LTC"+pqrs1.getCUN());
                    item.addProperty("idClient", pqrs1.getIdClient());
                    item.addProperty("type", pqrs1.getType());
                    item.addProperty("accions", "<button title='Ver Detalles'id='" + pqrs1.getId() + "'class='btn btnDetallesProducto btn-primary fa fa-eye''></button><button title='Actualizar Produccto'id='" + pqrs1.getId() + "'class='btn btnUpdate btn-warning fa fa-edit' data-toggle='modal' data-target='#modalEdicion'></button>");

                    array.add(item);

                }
                gson.add("datos", array);

                out.print(gson.toString());
                break;
            case "readArrayId":
                JsonObject gson1 = new JsonObject();
                JsonArray array1 = new JsonArray();
                pqrsDAO modelo2 = new pqrsDAO();
                int idPqrs = Integer.parseInt(request.getParameter("idUser"));
                for (Pqrs pqrs2 : modelo2.listPqrsArrayId(idPqrs)) {
                    JsonObject item = new JsonObject();
                    item.addProperty("id", pqrs2.getId()); // add property ,, agregar propiedad al objeto json 
                    item.addProperty("description", pqrs2.getDescription());
                    item.addProperty("datePqrs", pqrs2.getDatePqrs());
                    item.addProperty("evidence", pqrs2.getEvidence());
                    item.addProperty("CUN", "LTC"+pqrs2.getCUN());
                    item.addProperty("idClient", pqrs2.getIdClient());
                    item.addProperty("type", pqrs2.getType());
                    item.addProperty("accions", "<button title='Ver Detalles'id='" + pqrs2.getId() + "'class='btn btnDetallesPqrs btn-primary fa fa-eye''></button><button title='Actualizar Produccto'id='" + pqrs2.getId() + "'class='btn btnUpdate btn-warning fa fa-edit' data-toggle='modal' data-target='#modalEdicion'></button>");

                    array1.add(item);

                }
                gson1.add("datos", array1);

                out.print(gson1.toString());
                break;
            case "readIdPqrs":
                JsonObject gson2 = new JsonObject();
                JsonArray array2 = new JsonArray();
                int idPqrs1 = Integer.parseInt(request.getParameter("idPqrs"));
                pqrsDAO modelo3 = new pqrsDAO();
                Pqrs pqrs3 = (Pqrs) modelo3.listPqrsId(idPqrs1);
                JsonObject item = new JsonObject();
                item.addProperty("id", pqrs3.getId()); // add property ,, agregar propiedad al objeto json 
                item.addProperty("description", pqrs3.getDescription());
                item.addProperty("datePqrs", pqrs3.getDatePqrs());
                item.addProperty("evidence", pqrs3.getEvidence());
                item.addProperty("CUN", pqrs3.getCUN());
                item.addProperty("idClient", pqrs3.getIdClient());
                item.addProperty("type", pqrs3.getType());
                

                array2.add(item);
                gson2.add("datos", array2);

                out.print(gson2.toString());
                break;
            default:
                out.print("case not found");
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
