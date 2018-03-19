import java.sql.Connection; 
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.mysql.jdbc.Statement;

public class TestCon{

	Statement stmt = null;
	Connection connection = null;

	String driverName = "com.mysql.jdbc.Driver";

	String serverName = "nasdino.myds.me"; // Use this server. 
	String portNumber = "9865";
	//String url ="jdbc:mysql://91.100.3.26:9865/projektoplaeg3";
	String url ="jdbc:mysql://91.100.3.26:9865/SkoleDatabasen";

	String username = "Niklaes"; // You should modify this.
	String password = "Niklaeskode";

	public boolean doConnection(){ 
		try {
			// Load the JDBC driver
			Class.forName(driverName);

			// Create a connection to the database
			connection = DriverManager.getConnection(url, username, password);

		} catch (ClassNotFoundException e) {
			// Could not find the database driver 
			System.out.println("ClassNotFoundException : "+e.getMessage());
			return false;
		} catch (SQLException e) {
			// Could not connect to the database
			System.out.println(e.getMessage()); return false;
		}
		return true; 
	}

	public ArrayList<String> roomsInBuilding(String building) {
		ArrayList<String> roomsArray = new ArrayList<String>();
		String query = "SELECT * FROM Lokaler WHERE Bygning='" + building + "'";

		try {
			Statement stmt = (Statement) connection.createStatement();
			ResultSet rs = stmt.executeQuery(query); 
			while (rs.next()) {
				String room = rs.getString("Lokalenr.");
				roomsArray.add("Lokale: " + room);
			}
			return roomsArray;

		} catch (SQLException e) {
			// Could not connect to the database
			System.out.println(e.getMessage()); 
			return null;
		}
	}
}