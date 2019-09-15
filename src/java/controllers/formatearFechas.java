
package controllers;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


public class formatearFechas {
    
    public Date vistaMysql (String fecha){
        SimpleDateFormat sm = new SimpleDateFormat("yyyy-MM-dd");

                String strDate = sm.format(fecha);
                //Converting the String back to java.util.Date
                Date data = null;
                try {
                    data = sm.parse(strDate);
                } catch (ParseException e) {

                    e.printStackTrace();
                }
        return data;
    }
    
    
    
}
