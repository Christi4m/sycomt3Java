
package controllers;

import classes.Correos;
import java.util.Properties;
import javax.activation.DataHandler;
import javax.activation.FileDataSource;
import javax.mail.Address;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;


public class correosClass {
    Correos c1 = new Correos();
    public boolean correoUnitario(Correos c){
        try {
            Properties p = new Properties();
            p.put("mail.smtp.host", "smtp.gmail.com");
            p.setProperty("mail.smtp.starttls.enable", "true");
            p.setProperty("mail.smtp.port", "587");
            p.setProperty("mail.smtp.user", c.getUsuarioCorreo());
            p.setProperty("mail.smtp.auth", "true");
            
            Session s =  Session.getDefaultInstance(p,null);
            BodyPart texto = new MimeBodyPart();
            texto.setContent(c.getMensaje(), "text/html; charset=utf-8");
            BodyPart adjunto = new MimeBodyPart();
            
            if(!c.getRutaArchivo().equals("")){
                adjunto.setDataHandler(new DataHandler(new FileDataSource(c.getRutaArchivo())));
                adjunto.setFileName(c.getNombreArchivo());
            }
            
            MimeMultipart m = new MimeMultipart();
            m.addBodyPart(texto);
            
            if(!c.getRutaArchivo().equals("")){
                m.addBodyPart(adjunto);
            }
            
            MimeMessage mensaje = new MimeMessage(s);
            
            mensaje.setFrom(new InternetAddress(c.getUsuarioCorreo()));
            mensaje.addRecipient(Message.RecipientType.TO, new InternetAddress(c.getDestino()));
            mensaje.setSubject(c.getAsunto());
            mensaje.setContent(m);
            
            Transport t = s.getTransport("smtp");
            t.connect(c.getUsuarioCorreo(),c.getContrasena());
            t.sendMessage(mensaje, mensaje.getAllRecipients());
            t.close();
            
            return true;
        } catch (Exception e) {
            return false;
        }
        
    }
    public boolean correoMasivos(Correos c){
        try {
            Properties p = new Properties();
            p.put("mail.smtp.host", "smtp.gmail.com");
            p.setProperty("mail.smtp.starttls.enable", "true");
            p.setProperty("mail.smtp.port", "587");
            p.setProperty("mail.smtp.user", c.getUsuarioCorreo());
            p.setProperty("mail.smtp.auth", "true");
            
            Session s =  Session.getDefaultInstance(p,null);
            BodyPart texto = new MimeBodyPart();
            texto.setContent(c.getMensaje(), "text/html; charset=utf-8");
            BodyPart adjunto = new MimeBodyPart();
            
            if(!c.getRutaArchivo().equals("")){
                adjunto.setDataHandler(new DataHandler(new FileDataSource(c.getRutaArchivo())));
                adjunto.setFileName(c.getNombreArchivo());
            }
            
            MimeMultipart m = new MimeMultipart();
            m.addBodyPart(texto);
            
            if(!c.getRutaArchivo().equals("")){
                m.addBodyPart(adjunto);
            }
            
            MimeMessage mensaje = new MimeMessage(s);
            
            mensaje.setFrom(new InternetAddress(c.getUsuarioCorreo()));
            mensaje.addRecipient(Message.RecipientType.TO, new InternetAddress(c.getUsuarioCorreo()));
             InternetAddress[] bccAddress = new InternetAddress[c.getDestinoMasivos().size()];
            
            // To get the array of bccaddresses
            for( int i = 0; i < c.getDestinoMasivos().size(); i++ ) {
                bccAddress[i] = new InternetAddress(c.getDestinoMasivos().get(i));
            }
            
            // Set bcc: header field of the header.
            for( int i = 0; i < bccAddress.length; i++) {
                mensaje.addRecipient(Message.RecipientType.BCC, bccAddress[i]);
            }
            
            mensaje.setSubject(c.getAsunto());
            mensaje.setContent(m);
            
            Transport t = s.getTransport("smtp");
            t.connect(c.getUsuarioCorreo(),c.getContrasena());
            t.sendMessage(mensaje, mensaje.getAllRecipients());
            t.close();
            
            return true;
        } catch (Exception e) {
            return false;
        }
        
    }
    
}
