package models;

import java.sql.Connection;
import java.sql.DriverManager;

public class Conexion {

    private String username = "bf32eb5bcf916f";
    private String password = "b0662d2b";
    private String hostname = "us-cdbr-iron-east-05.cleardb.net";
    private String port = "3306";
    private String database = "heroku_1f35db2432ae40f";
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
