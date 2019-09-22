package controllers;

import classes.Articulo;
import classes.Producto;
import classes.numeroSerie;
import classes.Ventas;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.DecimalFormat;
import java.util.*;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import models.VentasDao;

public class controllerVenta extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        request.setCharacterEncoding("UTF-8");

        PrintWriter out = response.getWriter();
        String action = request.getParameter("action");

        HttpSession sesion = request.getSession(true);//recuperar la variable de sesion para acceder a todos los datos del cleitne que estan guardados en la sesion
        // Linea de codigo que trae el username de la sesion
        Object userName = sesion.getAttribute("userName") == null ? null : sesion.getAttribute("userName");
        //Liena de codigo que trae todos los objetos del carrito de compras que es anterior mente se guardaron en la sesion
        ArrayList<Articulo> articulos = sesion.getAttribute("carrito") == null ? null : (ArrayList) sesion.getAttribute("carrito");

        DecimalFormat formateador = new DecimalFormat("###,###,###,###.##");
        switch (action) {
            case "validarCarrito":
                if (articulos != null) {
                    out.print("1");
                } else {
                    out.print("0");
                }
                break;

            case "newVenta":
//Linea de codigo que trae el nombre del cliente que inicio sesion
                Object nombreCompleto = sesion.getAttribute("nameCliente");
                //Linea de codigo que trae el id  del cliente que inicio sesion
                int idCliente = Integer.parseInt(sesion.getAttribute("idCliente").toString());
                //Linea de codigo que instancia la clase producto para poder traer los datos de los productos que estan en el carrito

                controllerProduct cp = new controllerProduct();
                double total = 0;
                //Condicional que valida si el carrito tiene articulos o no

                //seccion de codigo que obtiene la fecha en la que se genera la venta
                Calendar c = new GregorianCalendar();
                String dia = Integer.toString(c.get(Calendar.DATE));
                String mes = Integer.toString(c.get(Calendar.MONTH) + 1);
                String annio = Integer.toString(c.get(Calendar.YEAR));
                String fecha = dia + "-" + "04" + "-" + annio;
                String numeroSerie = "";
                //instancia del modeloVentas Dao para acceder a sus metodos 
                VentasDao modelo1 = new VentasDao();
                //seccion de codigo que crea el numero de la factura
                numeroSerie = modelo1.generarNumSerie();
                if (numeroSerie == null) {
                    numeroSerie = "00000001";
                } else {
                    int incrementar = Integer.parseInt(numeroSerie);
                    numeroSerie ns = new numeroSerie();
                    numeroSerie = ns.numeroSerie(incrementar);
                }
                //Seccion de codigo para Guardar Venta       
                // ciclo repetitivo para traer el valor global o total de la factura generado en el carrito de compras
                for (Articulo a : articulos) {
                    Producto producto1 = cp.getProducto(a.getIdProducto());
                    total += a.getCantidad() * producto1.getPrecio();

                }
                //creacion del objeto de tipo ventas para poder guardar los datos de la venta en la bd 
                Ventas ventas1 = new Ventas(fecha, total, idCliente, numeroSerie, "En Despacho");
                VentasDao modelo2 = new VentasDao();

                if (modelo2.guardarVentas(ventas1)) {
                    VentasDao modelo3 = new VentasDao();
                    int idVenta = Integer.parseInt(modelo3.idVentas());
                    controllerProduct cpr = new controllerProduct();
                    // traer todos los datos de los productos ingresados en el carrito de compras
                    for (Articulo ar : articulos) {
                        Producto producto2 = cpr.getProducto(ar.getIdProducto());
                        VentasDao modelo4 = new VentasDao();
                        Ventas VDV = new Ventas(idVenta, producto2.getId(), ar.getCantidad(), producto2.getPrecio() * ar.getCantidad());
                        modelo4.guardarDetalleVenta(VDV);
                    }
                    out.print("1");

                } else {
                    out.print("0");
                }

                break;

            case "listVentas":
                JsonObject gson = new JsonObject();
                JsonArray array = new JsonArray();
                VentasDao modelo5 = new VentasDao();
                for (Ventas ventas2 : modelo5.getAllVEntas()) {
                    JsonObject item = new JsonObject();
                    item.addProperty("Codigo", ventas2.getId());
                    item.addProperty("Fecha", ventas2.getFechaVenta());
                    item.addProperty("Valor", formateador.format(ventas2.getValorGlobal()));
                    item.addProperty("Cliente", "<a class='idCliente' id='" + ventas2.getIdCliente() + "' role=\"button\" href=\"#\">" + ventas2.getIdCliente() + " </a>");
                    item.addProperty("Factura", ventas2.getNumSerie());
                    item.addProperty("Estado", ventas2.getEstado());
                    item.addProperty("acciones", "<button id='" + ventas2.getId() + "'class='btn btnDetalles btn-primary fa fa-eye''></button><button onclick=\"detailsPerson()\" id='" + ventas2.getId() + "' class='btn btnEliminar fa fa-check btn-success text-left'></button>");

                    array.add(item);

                }
                gson.add("datos", array);

                out.print(gson.toString());
                break;
            case "detalleVentas":
                JsonObject gsonDV = new JsonObject();
                JsonArray arrayDV = new JsonArray();
                int idVentaDV = Integer.parseInt(request.getParameter("idVenta"));
                VentasDao modelo6 = new VentasDao();
                for (Ventas ventas3 : modelo6.getAllDetallesVentas(idVentaDV)) {
                    JsonObject item = new JsonObject();
                    item.addProperty("idDetalleVenta", ventas3.getIdDetalleVenta());
                    item.addProperty("idProducto", ventas3.getIdProducto());
                    item.addProperty("nombreProducto", ventas3.getNameProducto());
                    item.addProperty("detalles", ventas3.getDetallesProducto());
                    item.addProperty("cantidad", ventas3.getCantidadProducto());
                    item.addProperty("precio", formateador.format(ventas3.getValorProducto()));
                    item.addProperty("detalles", "<button alt='Imagen del Producto' id='" + ventas3.getIdProducto() + "'class='btn btnDetallesProducto btn-primary fa fa-eye'></button>");
                    arrayDV.add(item);
                }
                gsonDV.add("datos", arrayDV);

                out.print(gsonDV.toString());
                break;
            case "listDespachos":
                JsonObject gsonLD = new JsonObject();
                JsonArray arrayLD = new JsonArray();

                VentasDao modelo7 = new VentasDao();
                for (Ventas ventas4 : modelo7.getAllDespachos()) {
                    JsonObject item = new JsonObject();
                    if (ventas4.getEstado().equalsIgnoreCase("En Despacho")) {
                        item.addProperty("Codigo", ventas4.getId());
                        item.addProperty("Fecha", ventas4.getFechaVenta());
                        item.addProperty("Valor", formateador.format(ventas4.getValorGlobal()));
                        item.addProperty("Cliente", "<a class='idCliente' id='" + ventas4.getIdCliente() + "' role=\"button\" href=\"#\">" + ventas4.getIdCliente() + " </a>");
                        item.addProperty("Factura", ventas4.getNumSerie());
                        item.addProperty("Estado", ventas4.getEstado());
                        item.addProperty("acciones", "<button alt='Imagen del Producto' id='" + ventas4.getId() + "'class='btn btnDetalles btn-primary fa fa-eye''></button><button id='" + ventas4.getId() + "' class='btn btnDespachar fa fa-check btn-success text-left'></button>");

                        arrayLD.add(item);
                    }

                }
                gsonLD.add("datos", arrayLD);

                out.print(gsonLD.toString());
                break;
            //caso para listar las entregas disponibles para asignar mensajero
            case "listEntregas":
                JsonObject gsonLE = new JsonObject();
                JsonArray arrayLE = new JsonArray();

                VentasDao modelo8 = new VentasDao();
                for (Ventas ventas4 : modelo8.getAllVEntas()) {
                    JsonObject item = new JsonObject();
                    if (ventas4.getEstado().equalsIgnoreCase("Confirmada")) {
                        item.addProperty("Codigo", ventas4.getId());
                        item.addProperty("Fecha", ventas4.getFechaVenta());
                        item.addProperty("Valor", formateador.format(ventas4.getValorGlobal()));
                        item.addProperty("Cliente", "<a class='idCliente' id='" + ventas4.getIdCliente() + "' role=\"button\" href=\"#\">" + ventas4.getIdCliente() + " </a>");
                        item.addProperty("Factura", "<a class='numFactura' id='" + ventas4.getIdFactura() + "' role=\"button\" href=\"#\">" + ventas4.getNumSerie() + " </a>");
                        item.addProperty("Estado", ventas4.getEstado());
                        item.addProperty("Mesajero", ventas4.getEstado());
                        item.addProperty("acciones", "<button id='" + ventas4.getId() + "'class='btn btnDetalles btn-primary fa fa-eye''></button></button><button id='" + ventas4.getId() + "'class='btn btnAsignarMensajero btn-success fa fa-user''></button>");

                        arrayLE.add(item);
                    }

                }
                gsonLE.add("datos", arrayLE);

                out.print(gsonLE.toString());
                break;
            case "procesarVenta":
                int res = 0;
                VentasDao modelo9 = new VentasDao();
                if (modelo9.ProcesarVenta(Integer.parseInt(request.getParameter("idVenta")), request.getParameter("estadoOrdenVenta"))) {
                    VentasDao modelo10 = new VentasDao();
                    if (modelo10.insertFactura(request.getParameter("numFactura"), Integer.parseInt(request.getParameter("idVenta")))) {
                        res = 1;
                    } else {
                        res = 0;
                    }
                    out.print(res);
                } else {
                    out.print(res);
                }
                break;
            case "deleteVenta":
                VentasDao id = new VentasDao();
                int idVentaDelete = Integer.parseInt(id.idVentas());
                VentasDao dv = new VentasDao();
                if (dv.deleteVenta(idVentaDelete)) {
                    out.print("1");
                } else {
                    out.print("0");
                }
                break;
            case "reportVentasMes":
                JsonObject gsonRV = new JsonObject();
                JsonArray arrayRV = new JsonArray();

                VentasDao modelo11 = new VentasDao();
                for (Ventas ventas5 : modelo11.getAllVentasMes()) {
                    JsonObject item = new JsonObject();
                    item.addProperty("mes", ventas5.getMes());
                    item.addProperty("ventasMes", ventas5.getVentasMes());

                    arrayRV.add(item);
                }
                gsonRV.add("datos", arrayRV);

                out.print(gsonRV.toString());
                break;
            case "Reporte2":
                JsonObject gsonRV1 = new JsonObject();
                JsonArray arrayRV1 = new JsonArray();
                VentasDao modelo12 = new VentasDao();
                for (Ventas ventas6 : modelo12.reporte2()) {
                    JsonObject item = new JsonObject();
                    item.addProperty("telaje", ventas6.getMes());
                    item.addProperty("ventasMes", ventas6.getVentasMes());
                    arrayRV1.add(item);

                }
                gsonRV1.add("datos", arrayRV1);
                out.print(gsonRV1.toString());
                break;
            case "Reporte3":
                JsonObject gsonRV2 = new JsonObject();
                JsonArray arrayRV2 = new JsonArray();
                VentasDao modelo13 = new VentasDao();
                for (Ventas ventas7 : modelo13.reporte3()) {
                    JsonObject item = new JsonObject();
                    item.addProperty("telaje", ventas7.getMes());
                    item.addProperty("ventasMes", ventas7.getVentasMes());
                    arrayRV2.add(item);

                }
                gsonRV2.add("datos", arrayRV2);
                out.print(gsonRV2.toString());
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
