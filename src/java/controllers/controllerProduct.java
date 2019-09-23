/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controllers;

import classes.Producto;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import java.io.*;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import models.ProductoDAO;

/**
 *
 * @author Christiam
 */
@MultipartConfig
public class controllerProduct extends HttpServlet {

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

        String action = request.getParameter("accion");//para traer datos o paramentros de la vista
        DecimalFormat formateador = new DecimalFormat("###,###,###,###.##");

        switch (action) {
            case "create":
                //caso para crear un producto en bd este caso contiene el capturar los datos del producto
                //pero tambien esta programado el proceso para subir la imagen del producto a la carpeta del proyecto
                //utilizando el request.getpart para capturar el archivo de imagen desde el formulario en la vista y el
                //inputStream para crear el fichero en la carpeta del proyecto
                InputStream inputStream = null;
                OutputStream outputStream = null;

                try {
                    inputStream = request.getPart("imagenProducto").getInputStream(); //leemos el fichero local
                    String fileName = request.getPart("imagenProducto").getSubmittedFileName();
                    // write the inputStream to a FileOutputStream
                    outputStream = new FileOutputStream(new File("D:\\ADMIN\\Desktop\\Desarrollo\\Java\\SycomteJAVA\\web\\images\\productos\\" + fileName));

                    int read = 0;
                    byte[] bytes = new byte[1024];

                    while ((read = inputStream.read(bytes)) != -1) {
                        outputStream.write(bytes, 0, read);
                    }

                    Producto pr = new Producto(request.getParameter("nombreProducto"), request.getParameter("decripcionProducto"), request.getParameter("telajeProducto"), request.getParameter("ubicacionBodega"), Math.round(Double.parseDouble(request.getParameter("precioMC"))), Double.parseDouble(request.getParameter("stock")), "images/productos/" + fileName,Integer.parseInt(request.getParameter("proveedorProducto")));
                    ProductoDAO mpc = new ProductoDAO();
                    if (mpc.crearProducto(pr)) {
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

            case "list":
                //caso para listar todos los productos almacenados en la bd, en este caso traemos todos los productos de la bn 
                //instanciando un medoto de la clase modeloProductoDAO "getAllProductos" y una vez teniendo los
                //datos en un for each se crea un objeto de tipo json que posteriormente es lo que retorna para poder
                //ser llamado en la vista por medio de ajax y asi pintar o mostrar todos los productos
                JsonObject gson = new JsonObject();
                JsonArray array = new JsonArray();
                ProductoDAO mp = new ProductoDAO();
                for (Producto producto : mp.getAllProductos()) {
                    JsonObject item = new JsonObject();
                    item.addProperty("Codigo", producto.getId()); // add property ,, agregar propiedad al objeto json 
                    item.addProperty("Nombre", producto.getNombre());
                    item.addProperty("Telaje", producto.getTelaje());
                    item.addProperty("Ubicacion", producto.getUbicacion());
                    item.addProperty("Precio", producto.getPrecio());
                    item.addProperty("Stock", producto.getStock());
                    item.addProperty("Imagen", producto.getImg());
                    item.addProperty("acciones", "<button id='" + producto.getId() + "'class='btn btnDetallesProducto btn-primary fa fa-eye''></button><button id='" + producto.getId() + "'class='btn btnUpdate btn-warning fa fa-edit' data-toggle='modal' data-target='#modalEdicion'></button><button id='" + producto.getId() + "' class='btn btnEliminar fa fa-trash btn-danger text-left' data-toggle='modal' data-target='#modalEliminar'></button>");

                    array.add(item);

                }
                gson.add("datos", array);

                out.print(gson.toString());
                break;

            case "modalUpdate":
                //caso para llenar los datos del producto en el modal para posteriormente ser editados y actualizados
                //en este caso instanciamos un metodo del la clase ProductoDAO "getProducto" la cual lista todos los datos de un 
                //producto por su id para posteriormente ser utilizados en la vista y ostrarlos como values en los inputs
                //del formulario actualizar y aplicar los cambios correspondientes
                JsonObject gson1 = new JsonObject();
                JsonArray array1 = new JsonArray();
                int idUpdate = Integer.parseInt(request.getParameter("idProducto"));
                ProductoDAO mpuo = new ProductoDAO();
                Producto prt = (Producto) mpuo.getProducto(idUpdate);
                JsonObject item = new JsonObject();
                item.addProperty("Codigo", prt.getId());
                item.addProperty("Nombre", prt.getNombre());
                item.addProperty("Telaje", prt.getTelaje());
                item.addProperty("Ubicacion", prt.getUbicacion());
                item.addProperty("Precio", formateador.format(prt.getPrecio()));
                item.addProperty("Stock", prt.getStock());
                item.addProperty("proveedor", prt.getProveedor());
                item.addProperty("imagen", prt.getImg());
                item.addProperty("descripcion", prt.getDescripcion());

                array1.add(item);
                gson1.add("datos", array1);

                out.print(gson1.toString());

                break;
            case "update":
                // caso para actualizar los datos de un producto, en este caso se capturan los datos del formulario
                //actualizar y se envian a un metodo de la clase ModeloProductoDao "updateProducto" el cual
                //lleva los datos capturados a la bd y realiza la actualizacion segun aplique
                Producto pf = new Producto(Integer.parseInt(request.getParameter("id")), request.getParameter("nombre"), "", request.getParameter("telaje"), request.getParameter("ubicacion"), Double.parseDouble(request.getParameter("precioMC")), Double.parseDouble(request.getParameter("stock")), "", "");
                ProductoDAO mpu = new ProductoDAO();
                if(mpu.updateProducto(pf)){
                    out.print("1");
                }else{
                    out.print("0");
                }
                break;
            case "delete":
                // caso para eliminarlos un producto, en este caso se capturan el id del producto a eliminar enviado
                // desde la vista y se envia a un metodo de la clase ModeloProductoDao "deleteProducto" el cual
                //lleva el id capturado a la bd y realiza la eliminacion segun aplique
                ProductoDAO mpd = new ProductoDAO();
                int idProducto = Integer.parseInt(request.getParameter("iDProducto"));
                mpd.deleteProducto(idProducto);

                break;

        }
    }
// metodo utilizado para pintar el carrito de compras, metodo que lista todos los productos y los lista en la pagina carritoCOmpras
    public String PrintCart(HttpServletRequest request) {
        ProductoDAO mppc = new ProductoDAO();
        String htmlcode = "";
        DecimalFormat formateador = new DecimalFormat("###,###,###,###.##");
        for (Producto producto : mppc.getAllProductos()) {
            htmlcode += "<div class=\"col-sm-4\">\n"
                    + "							<div class=\"product-image-wrapper\">\n"
                    + "								<div class=\"single-products\">\n"
                    + "									<div class=\"productinfo text-center\">\n"
                    + "										<img src=\"../../" + producto.getImg() + "\" alt=\"\" />\n"
                    + "										<h2>$" + formateador.format(producto.getPrecio()) + "</h2>\n"
                    + "										<p>" + producto.getNombre() + "</p>\n"
                    + "										<a href=\"product-details.jsp?id=" + producto.getId() + "\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Ver detalles</a>\n"
                    + "									</div>\n"
                    + "									<div class=\"product-overlay\">\n"
                    + "										<div class=\"overlay-content\">\n"
                    + "											<h2>$" + formateador.format(producto.getPrecio()) + "</h2>\n"
                    + "											<p>" + producto.getNombre() + "</p>\n"
                    + "											<a href=\"product-details.jsp?id=" + producto.getId() + "\" class=\"btn btn-default add-to-cart\"><i class=\"fa fa-shopping-cart\"></i>Ver Detalles</a>\n"
                    + "										</div>\n"
                    + "									</div>\n"
                    + "								</div>\n"
                    + "							</div>\n"
                    + "						</div>";
        }
        return htmlcode;
    }

    public Producto getProducto(int id) {

        return new ProductoDAO().getProducto(id);

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
