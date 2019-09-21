package controllers;

import classes.Compras;
import classes.Producto;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.DecimalFormat;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.StringTokenizer;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import models.ComprasDao;
import models.ProductoDAO;

@MultipartConfig
public class controllerCompras extends HttpServlet {

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
        DecimalFormat formateador = new DecimalFormat("###,###,###,###.##");

        switch (action) {
            case "newShop":
                
                //Seccion de codigo para capturar la fecha del dia para registrar la compra 
                Calendar c = new GregorianCalendar();
                String dia = Integer.toString(c.get(Calendar.DATE));
                String mes = Integer.toString(c.get(Calendar.MONTH) + 1);
                String annio = Integer.toString(c.get(Calendar.YEAR));
                String fecha = dia + " " + mes + " " + annio;
                //seccion de codigo para instanciar las clases compras y comprasDao
                ComprasDao shopDao1 = new ComprasDao();
                Compras shop1 = new Compras(0, fecha, request.getParameter("descripcionShop"), Double.parseDouble(request.getParameter("totalShop")), Integer.parseInt(request.getParameter("proveedorShop")), 0, 0, 0,"Realizada");
                //condicional if para guardar la compra y tomar un decision depensiendo el resultado que arroje el modelo
                if (shopDao1.newShop(shop1)) {
                    ComprasDao shopDao2 = new ComprasDao();
                    int idShop = shopDao2.idCompras();
                    
                    String[] arrOfStr = request.getParameter("detailsShop").split(";");
                    
                    for (String a : arrOfStr) {
                        StringTokenizer misAtributos = new StringTokenizer(a, ",");
                        int idP = Integer.parseInt(misAtributos.nextToken().trim());
                        int cant = Integer.parseInt(misAtributos.nextToken().trim());
                        double precio = Double.parseDouble(misAtributos.nextToken().trim());

                        ComprasDao shopDao3 = new ComprasDao();
                        Compras shop2 = new Compras(idShop, "", "", 0, 0, idP, cant, precio,"");
                        
                        shopDao3.newDetailShop(shop2);
                    }

                    out.print("1");
                } else {
                    out.print("0");
                }
                break;
            case "listShop":
                JsonObject gson = new JsonObject();
                JsonArray array = new JsonArray();
                ComprasDao shopDao4 = new ComprasDao();
                for (Compras shop3 : shopDao4.getAllShop()) {
                    JsonObject item = new JsonObject();
                    item.addProperty("Codigo", shop3.getIdShop());
                    item.addProperty("Fecha", shop3.getFechaShop());
                    item.addProperty("Valor", formateador.format(shop3.getValorTotalShop()));
                    item.addProperty("proveedor", "<a class='idproveedor' id='" + shop3.getIdProveedorShop()+ "' role=\"button\" href=\"#\">" + shop3.getIdProveedorShop() + " </a>");
                    item.addProperty("obs", shop3.getObsShop());
                    item.addProperty("Estado", shop3.getEstadoShop());
                    item.addProperty("acciones", "<button id='" + shop3.getIdShop() + "'class='btn btnDetalles btn-primary fa fa-eye''></button><button id='" + shop3.getIdShop() + "' class='btn btnFinalizar fa fa-check btn-success text-left'></button><button id='" + shop3.getIdShop() + "' class='btn btnFinalizar fa fa-times btn-danger text-left'></button>");

                    array.add(item);

                }
                gson.add("datos", array);

                out.print(gson.toString());
                break;
            case "listDetailsShop":
                 JsonObject gsonDV = new JsonObject();
                JsonArray arrayDV = new JsonArray();
                int idShop = Integer.parseInt(request.getParameter("idShop"));
                ComprasDao shopDao5 = new ComprasDao();
                for (Compras shop4 : shopDao5.getAllDetailsShop(idShop)) {
                    JsonObject item = new JsonObject();
                    ProductoDAO prDao = new ProductoDAO();
                    Producto product = (Producto) prDao.getProducto(shop4.getIdProductShop());
                    item.addProperty("idProducto", shop4.getIdProductShop());
                    item.addProperty("nombreProducto", product.getNombre());
                    item.addProperty("cantidad", shop4.getCantProductShop());
                    item.addProperty("precio", formateador.format(shop4.getValorUnitario()));                    
                    arrayDV.add(item);
                }
                gsonDV.add("datos", arrayDV);

                out.print(gsonDV.toString());
                break;
            default:
                out.print("Error");
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
