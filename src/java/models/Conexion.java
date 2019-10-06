
package models;

import java.sql.Connection;
import java.sql.DriverManager;


public class Conexion {
    
    private String username = "bf1a95b571de59";
    private String password = "65fbef8b";
    private String hostname = "us-cdbr-iron-east-05.cleardb.net";
    private String port = "3306";
    private String database = "heroku_f0754d19cf0929d";
    private String classname = "com.mysql.jdbc.Driver";
    private String url = "jdbc:mysql://"+hostname+":"+port+"/"+database;
    private Connection conn;

    public Conexion() {
        try {
            Class.forName(classname);
            this.conn = DriverManager.getConnection(url, username, password);
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }
    }
    
    public Connection getConnection(){
        return this.conn;
    }
    
    
    
}
