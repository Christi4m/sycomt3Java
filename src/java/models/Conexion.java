package models;

import java.sql.Connection;
import java.sql.DriverManager;

public class Conexion {

    private String username = "b20490656a2d3c";
    private String password = "c41d3fb1";
    private String hostname = "us-cdbr-iron-east-05.cleardb.net";
    private String port = "3306";
    private String database = "heroku_f193e31883733ad";
    private String classname = "com.mysql.jdbc.Driver";
    private String url = "jdbc:mysql://" + hostname + ":" + port + "/" + database;
    private Connection conn;

    public Conexion() {
        try {
            Class.forName(classname);
            this.conn = DriverManager.getConnection(url, username, password);
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }
    }

    public Connection getConnection() {
        return this.conn;
    }

}
