package controllers;

import classes.Articulo;
import classes.Correos;
import classes.Producto;
import classes.Tercero;
import classes.numeroSerie;
import classes.Ventas;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.DecimalFormat;
import java.util.*;
import java.util.StringTokenizer;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import models.ProductoDAO;
import models.TerceroDAO;
import models.VentasDAO;

@MultipartConfig
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
                //Linea de codigo que trae el id  del cliente que inicio sesion
                int idCliente = Integer.parseInt(sesion.getAttribute("idCliente").toString());

                //seccion de codigo que obtiene la fecha en la que se genera la venta
                Calendar c = new GregorianCalendar();
                String dia = Integer.toString(c.get(Calendar.DATE));
                String mes = Integer.toString(c.get(Calendar.MONTH) + 1);
                String annio = Integer.toString(c.get(Calendar.YEAR));
                String fecha = dia + "-" + "06" + "-" + annio;

                String numeroSerie = "";
                //instancia del modeloVentas Dao para acceder a sus metodos 
                VentasDAO modelo1 = new VentasDAO();
                //seccion de codigo que crea el numero de la factura
                numeroSerie = modelo1.generarNumSerie();
                if (numeroSerie == null) {
                    numeroSerie = "00000001";
                } else {
                    int incrementar = Integer.parseInt(numeroSerie);
                    numeroSerie ns = new numeroSerie();
                    numeroSerie = ns.numeroSerie(incrementar);
                }
                Double ValorGlobal = Double.parseDouble(request.getParameter("totalShop"));
                //creacion del objeto de tipo ventas para poder guardar los datos de la venta en la bd 
                Ventas ventas1 = new Ventas(fecha, ValorGlobal, idCliente, numeroSerie, "En Despacho");

                VentasDAO modelo2 = new VentasDAO();

                if (modelo2.guardarVentas(ventas1)) {
                    VentasDAO modelo3 = new VentasDAO();
                    int idVenta = Integer.parseInt(modelo3.idVentas());

                    // traer todos los datos de los productos ingresados en el carrito de compras
                    String[] arrOfStr = request.getParameter("detailsShop").split(";");
                    String detalleVenta = "";
                    for (String a : arrOfStr) {
                        StringTokenizer misAtributos = new StringTokenizer(a, ",");
                        int idP = Integer.parseInt(misAtributos.nextToken().trim());
                        double cant = Double.parseDouble(misAtributos.nextToken().trim());
                        double precio = Double.parseDouble(misAtributos.nextToken().trim());

                        ProductoDAO mpuo = new ProductoDAO();
                        Producto prt = (Producto) mpuo.getProducto(idP);

                        detalleVenta += "Producto: " + prt.getNombre() + " Cantidad: " + Math.round(cant) + " Valor Unitario: " + formateador.format(precio) + "<br>";

                        VentasDAO modelo4 = new VentasDAO();
                        Ventas VDV = new Ventas(idVenta, idP, cant, precio);
                        modelo4.guardarDetalleVenta(VDV);
                    }

                    String cuerpo = "<h2>!Felicitaciones¡</h2>\n"
                            + "  <h4>Su compra se ha realizado exitosamente\n"
                            + "  <br>Su compra re ha realizado con:\n"
                            + "  <br><Strong>Numero de facturacion: </Strong>" + numeroSerie + "\n"
                            + "  <br><Strong>Valor: </Strong>" + formateador.format(ValorGlobal) + " \n"
                            + "  <br>Detalle de la compra: \n"
                            + "  <br>" + detalleVenta + " \n"
                            + "  </h4>";

                    TerceroDAO modelo5 = new TerceroDAO();
                    Tercero tercero2 = (Tercero) modelo5.getTerceroId(idCliente);
                    Correos cor = new Correos("sycomt3A@gmail.com", "ealvrtizdmmxvsgp", "", "", tercero2.getEmail(), "Compra Realizada LunaTextil.com", cuerpo);

                    correosClass cco = new correosClass();
                    cco.correoUnitario(cor);
                    out.print("1");

                } else {
                    out.print("0");
                }

                break;

            case "listVentas":
                JsonObject gson = new JsonObject();
                JsonArray array = new JsonArray();
                VentasDAO modelo5 = new VentasDAO();
                for (Ventas ventas2 : modelo5.getAllVEntas()) {
                    JsonObject item = new JsonObject();
                    item.addProperty("Codigo", ventas2.getId());
                    item.addProperty("Fecha", ventas2.getFechaVenta());
                    item.addProperty("Valor", formateador.format(ventas2.getValorGlobal()));
                    item.addProperty("Cliente", "<a class='idCliente' id='" + ventas2.getIdCliente() + "' role=\"button\" href=\"#\">" + ventas2.getIdCliente() + " </a>");
                    item.addProperty("Factura", ventas2.getNumSerie());
                    item.addProperty("Estado", ventas2.getEstado());
                    if (sesion.getAttribute("typeTercero").toString().equalsIgnoreCase("Administrador")) {
                        item.addProperty("acciones", "<button id='" + ventas2.getId() + "'class='btn btnDetalles btn-primary fa fa-eye''></button>");
                    } else {
                        item.addProperty("acciones", "<button id='" + ventas2.getId() + "'class='btn btnDetalles btn-primary fa fa-eye''></button><button onclick=\"detailsPerson()\" id='" + ventas2.getId() + "' class='btn btnEliminar fa fa-check btn-success text-left'></button>");
                    }

                    array.add(item);

                }
                gson.add("datos", array);

                out.print(gson.toString());
                break;
            case "listVentasID":
                JsonObject gson4 = new JsonObject();
                JsonArray array4 = new JsonArray();
                VentasDAO modeloLVI = new VentasDAO();
                for (Ventas ventas2 : modeloLVI.getAllVEntas()) {
                    JsonObject item = new JsonObject();
                    if (ventas2.getIdCliente() == Integer.parseInt(request.getParameter("idUser"))) {
                        item.addProperty("Codigo", ventas2.getId());
                        item.addProperty("Fecha", ventas2.getFechaVenta());
                        item.addProperty("Valor", formateador.format(ventas2.getValorGlobal()));
                        item.addProperty("Cliente", "<a class='idCliente' id='" + ventas2.getIdCliente() + "' role=\"button\" href=\"#\">" + ventas2.getIdCliente() + " </a>");
                        item.addProperty("Factura", ventas2.getNumSerie());
                        item.addProperty("Estado", ventas2.getEstado());
                        if(ventas2.getEstado().equalsIgnoreCase("Entregada")){
                            item.addProperty("acciones", "<button data-toggle=\"modal\" data-target=\"#modalDetalleComprasC\" title='Detalles de la compra' id='" + ventas2.getId() + "'class='btn btnDetalles btn-primary fa fa-eye''></button><button title='Solicitar Garantia'id='" + ventas2.getId() + "'class='btn btnGarantia btn-danger far fa-calendar-times'></button>");
                        }else{
                            item.addProperty("acciones", "<button data-toggle=\"modal\" data-target=\"#modalDetalleComprasC\"title='Detalles de la compra' id='" + ventas2.getId() + "'class='btn btnDetalles btn-primary fa fa-eye''></button>");
                        }
                    

                        array4.add(item);
                    }
                }
                gson4.add("datos", array4);

                out.print(gson4.toString());
                break;
            case "detalleVentas":
                JsonObject gsonDV = new JsonObject();
                JsonArray arrayDV = new JsonArray();
                int idVentaDV = Integer.parseInt(request.getParameter("idVenta"));
                VentasDAO modelo6 = new VentasDAO();
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

                VentasDAO modelo7 = new VentasDAO();
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

                VentasDAO modelo8 = new VentasDAO();
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
                VentasDAO modelo9 = new VentasDAO();
                int idVentas = Integer.parseInt(request.getParameter("idVenta"));
                int buc = 0;
                VentasDAO modeloDetails = new VentasDAO();
                for (Ventas ventas3 : modeloDetails.getAllDetallesVentas(idVentas)) {
                    ProductoDAO prDAO = new ProductoDAO();
                    Producto pr = (Producto) prDAO.getProducto(ventas3.getIdProducto());

                    if (pr.getStock() > ventas3.getCantidadProducto()) {
                        buc += buc;
                    } else {
                        buc += 1;
                    }
                }
                if (buc != 0) {
                    res = 3;
                } else {
                    VentasDAO modeloDetails1 = new VentasDAO();
                    for (Ventas ventas4 : modeloDetails1.getAllDetallesVentas(idVentas)) {
                        ProductoDAO prDAO = new ProductoDAO();
                        Producto pr1 = (Producto) prDAO.getProducto(ventas4.getIdProducto());
                        ProductoDAO prDAO3 = new ProductoDAO();
                        prDAO3.updateStockProducto(ventas4.getIdProducto(), pr1.getStock() - ventas4.getCantidadProducto());

                    }
                    if (modelo9.ProcesarVenta(Integer.parseInt(request.getParameter("idVenta")), request.getParameter("estadoOrdenVenta"))) {
                        VentasDAO modelo10 = new VentasDAO();
                        if (modelo10.insertFactura(request.getParameter("numFactura"), Integer.parseInt(request.getParameter("idVenta")))) {
                            res = 1;
                        } else {
                            res = 0;
                        }
                    }
                }
                out.print(res);
                break;
            case "deleteVenta":
                VentasDAO id = new VentasDAO();
                int idVentaDelete = Integer.parseInt(id.idVentas());
                VentasDAO dv = new VentasDAO();
                if (dv.deleteVenta(idVentaDelete)) {
                    out.print("1");
                } else {
                    out.print("0");
                }
                break;
            case "reportVentasMes":
                JsonObject gsonRV = new JsonObject();
                JsonArray arrayRV = new JsonArray();

                VentasDAO modelo11 = new VentasDAO();
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
                VentasDAO modelo12 = new VentasDAO();
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
                VentasDAO modelo13 = new VentasDAO();
                for (Ventas ventas7 : modelo13.reporte3()) {
                    JsonObject item = new JsonObject();
                    item.addProperty("telaje", ventas7.getMes());
                    item.addProperty("ventasMes", ventas7.getVentasMes());
                    arrayRV2.add(item);

                }
                gsonRV2.add("datos", arrayRV2);
                out.print(gsonRV2.toString());
                break;
            case "Reporte4":
                JsonObject gsonRV3 = new JsonObject();
                JsonArray arrayRV3 = new JsonArray();
                VentasDAO modelo14 = new VentasDAO();
                JsonObject item = new JsonObject();
                item.addProperty("gananciasMes", modelo14.reporte4());
                arrayRV3.add(item);
                gsonRV3.add("datos", arrayRV3);
                out.print(gsonRV3.toString());
                break;
            case "entregasPendientes":
                JsonObject gsonRV4 = new JsonObject();
                JsonArray arrayRV4 = new JsonArray();
                VentasDAO modelo15 = new VentasDAO();
                for (Ventas ventas7 : modelo15.getAllEntregasPendientes()) {
                    JsonObject item1 = new JsonObject();
                    item1.addProperty("idVenta", ventas7.getId());
                    item1.addProperty("fechaVenta", ventas7.getFechaVenta());
                    item1.addProperty("valorGlobal", ventas7.getValorGlobal());
                    item1.addProperty("idCliente", "<a class='idCliente' id='" + ventas7.getIdCliente() + "' role=\"button\" href=\"#\">" + ventas7.getIdCliente() + " </a>");
                    item1.addProperty("numFactura", "<span id='" + ventas7.getIdFactura() + "'>" + ventas7.getNumSerie() + "<span>");
                    item1.addProperty("zona", ventas7.getZonaCliente());
                    item1.addProperty("acciones", "<button id='" + ventas7.getId() + "'class='btn btnAsignarMensajero btn-success fa fa-user''></button>");
                    arrayRV4.add(item1);

                }
                gsonRV4.add("datos", arrayRV4);
                out.print(gsonRV4.toString());
                break;
            case "entregasAsijgnadas":
                JsonObject gsonRV5 = new JsonObject();
                JsonArray arrayRV5 = new JsonArray();
                VentasDAO modelo16 = new VentasDAO();
                for (Ventas ventas7 : modelo16.getAllEntregasAsignadas()) {
                    JsonObject item1 = new JsonObject();
                    item1.addProperty("idVenta", ventas7.getId());
                    item1.addProperty("fechaVenta", ventas7.getFechaVenta());
                    item1.addProperty("valorGlobal", ventas7.getValorGlobal());
                    item1.addProperty("idCliente", "<a class='idCliente' id='" + ventas7.getIdCliente() + "' role=\"button\" href=\"#\">" + ventas7.getIdCliente() + " </a>");
                    item1.addProperty("numFactura", "<span id='" + ventas7.getIdFactura() + "'>" + ventas7.getNumSerie() + "<span>");
                    item1.addProperty("acciones", "<button id='" + ventas7.getId() + "'class='btn btnDetalles btn-primary fa fa-eye''></button>");
                    arrayRV5.add(item1);

                }
                gsonRV5.add("datos", arrayRV5);
                out.print(gsonRV5.toString());
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
