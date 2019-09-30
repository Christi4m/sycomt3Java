/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package classes;

import java.util.ArrayList;

/**
 *
 * @author ADMIN
 */
public class Correos {
    private String usuarioCorreo;
    private String contrasena;
    private String rutaArchivo;
    private String nombreArchivo;
    private String destino;
    private String asunto;
    private String mensaje;
    private ArrayList<String> destinoMasivos;

    public Correos() {
    }

    public Correos(String usuarioCorreo, String contrasena, String rutaArchivo, String nombreArchivo, String destino, String asunto, String mensaje) {
        this.usuarioCorreo = usuarioCorreo;
        this.contrasena = contrasena;
        this.rutaArchivo = rutaArchivo;
        this.nombreArchivo = nombreArchivo;
        this.destino = destino;
        this.asunto = asunto;
        this.mensaje = mensaje;
    }

    public Correos(String usuarioCorreo, String contrasena, String rutaArchivo, String nombreArchivo, String destino, String asunto, String mensaje, ArrayList<String> destinoMasivos) {
        this.usuarioCorreo = usuarioCorreo;
        this.contrasena = contrasena;
        this.rutaArchivo = rutaArchivo;
        this.nombreArchivo = nombreArchivo;
        this.destino = destino;
        this.asunto = asunto;
        this.mensaje = mensaje;
        this.destinoMasivos = destinoMasivos;
    }

    

    public String getUsuarioCorreo() {
        return usuarioCorreo;
    }

    public void setUsuarioCorreo(String usuarioCorreo) {
        this.usuarioCorreo = usuarioCorreo;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public String getRutaArchivo() {
        return rutaArchivo;
    }

    public void setRutaArchivo(String rutaArchivo) {
        this.rutaArchivo = rutaArchivo;
    }

    public String getNombreArchivo() {
        return nombreArchivo;
    }

    public void setNombreArchivo(String nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }

    public String getAsunto() {
        return asunto;
    }

    public void setAsunto(String asunto) {
        this.asunto = asunto;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public ArrayList<String> getDestinoMasivos() {
        return destinoMasivos;
    }

    public void setDestinoMasivos(ArrayList<String> destinoMasivos) {
        this.destinoMasivos = destinoMasivos;
    }
    
    
}
