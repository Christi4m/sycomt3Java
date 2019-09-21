package controllers;

import classes.Producto;
import classes.Proveedores;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import models.ProductoDAO;
import models.ProveedoresDAO;

@MultipartConfig
public class controllerProveedor extends HttpServlet {

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
        response.setContentType("text/html;charset=UTF-8");//para el trato de los caracteres especiales
        request.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();//para imprimir codigo en la pantalla (libreria de java)
        String accion = request.getParameter("accion");//para traer datos o paramentros de la vista

        switch (accion) {
            case "listarProveedores":
                ProveedoresDAO mpvd = new ProveedoresDAO();
                JsonObject gson = new JsonObject();
                JsonArray array = new JsonArray();

                for (Proveedores pr1 : mpvd.getAllProveedores()) {
                    JsonObject item = new JsonObject();

                    item.addProperty("idProveedor", pr1.getId()); // add property ,, agregar propiedad al objeto json 
                    item.addProperty("razonSocial", pr1.getRazonSocial());
                    item.addProperty("nit", pr1.getNit());
                    item.addProperty("emailP", pr1.getEmailP());
                    item.addProperty("numCellPhoneP", pr1.getNumCellPhoneP());
                    item.addProperty("numLandLineP", pr1.getNumLandLineP());
                    item.addProperty("addressP", pr1.getAddressP());
                    item.addProperty("representanteLegal", pr1.getRepresentanteLegal());
                    item.addProperty("estadoProveedor", pr1.getEstadoProveedor());
                    item.addProperty("acciones", "<button id='" + pr1.getId() + "'class='btn btnDetails btn-primary fa fa-eye' data-toggle='modal' data-target='#modalDetallesProveedor'><button id='" + pr1.getId() + "'class='btn btnUpdate btn-warning fa fa-edit' data-toggle='modal' data-target='#modalEdicion'></button><button id='" + pr1.getId() + "' class='btn btnEliminar fa fa-ban btn-danger text-left' data-toggle='modal' data-target='#modalEliminar'></button>");

                    array.add(item);

                }
                gson.add("datos", array);

                out.print(gson.toString());
                break;
            case "listarDetallesId":
                JsonObject gson1 = new JsonObject();
                JsonArray array1 = new JsonArray();
                int idProveedor = Integer.parseInt(request.getParameter("idProveedor"));
                ProveedoresDAO mpvd1 = new ProveedoresDAO();
                Proveedores prv1 = (Proveedores) mpvd1.getProveedorId(idProveedor);
                JsonObject item = new JsonObject();
                item.addProperty("emailP", prv1.getEmailP());
                item.addProperty("numCellPhoneP", prv1.getNumCellPhoneP());
                item.addProperty("numLandLineP", prv1.getNumLandLineP());
                item.addProperty("addressP", prv1.getAddressP());
                item.addProperty("representanteLegal", prv1.getRepresentanteLegal());

                array1.add(item);
                gson1.add("datos", array1);

                out.print(gson1.toString());
                break;

            case "crearProveedor":
                ProveedoresDAO mpvd2 = new ProveedoresDAO();
                Proveedores prv24 = new Proveedores(request.getParameter("razonSocial"), request.getParameter("nit"), request.getParameter("emailP"), request.getParameter("numCellPhoneP"), request.getParameter("numLandLineP"), request.getParameter("addressP"), request.getParameter("representanteLegal"), "Activo");
                if (mpvd2.crearProveedor(prv24)) {
                    out.print("1");
                } else {
                    out.print("0");
                }
                break;
            case "listarProveedorId":
                JsonObject gson2 = new JsonObject();
                JsonArray array2 = new JsonArray();
                int idProveedor1 = Integer.parseInt(request.getParameter("idProveedor"));
                ProveedoresDAO mpvd3 = new ProveedoresDAO();
                Proveedores prv3 = (Proveedores) mpvd3.getProveedorId(idProveedor1);
                JsonObject item1 = new JsonObject();
                item1.addProperty("razonSocial", prv3.getRazonSocial());
                item1.addProperty("nit", prv3.getNit());
                item1.addProperty("estado", prv3.getEstadoProveedor());
                item1.addProperty("emailP", prv3.getEmailP());
                item1.addProperty("numCellPhoneP", prv3.getNumCellPhoneP());
                item1.addProperty("numLandLineP", prv3.getNumLandLineP());
                item1.addProperty("addressP", prv3.getAddressP());
                item1.addProperty("representanteLegal", prv3.getRepresentanteLegal());

                array2.add(item1);
                gson2.add("datos", array2);

                out.print(gson2.toString());
                break;
            case "ActualizarProveedor":
                ProveedoresDAO mpvd4 = new ProveedoresDAO();
                Proveedores prv5 = new Proveedores(Integer.parseInt(request.getParameter("idU")),request.getParameter("razonSocial"), request.getParameter("emailP"), request.getParameter("numCellPhoneP"), request.getParameter("numLandLineP"), request.getParameter("addressP"), request.getParameter("representanteLegal"));
                if (mpvd4.UpdateProveedor(prv5)) {
                    out.print("1");
                } else {
                    out.print("0");
                }
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
