package data;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.List;

import com.mysql.jdbc.Statement;

public class UserDAO implements IUserDAO {
	
	Statement stmt = null;
	Connection connection = null;

	final String driverName = "com.mysql.jdbc.Driver";
	String serverName;
	String portNumber;
	String url;
	String username;
	String password;

	public UserDAO(String serverName, String portNumber, String url, String username, String password) {
		this.serverName = serverName;
		this.portNumber = portNumber;
		this.url = url;
		this.username = username;
		this.password = password;		
		
		try {
			// Load the JDBC driver
			Class.forName(driverName);

			// Create a connection to the database
			connection = DriverManager.getConnection(url, username, password);

		} catch (ClassNotFoundException e) {
			// Could not find the database driver 
			System.out.println("ClassNotFoundException : "+e.getMessage());
		} catch (SQLException e) {
			// Could not connect to the database
			System.out.println(e.getMessage()); 
		}
	}

	@Override
	public UserDTO getUser(int userId) throws DALException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<UserDTO> getUserList() throws DALException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void createUser(UserDTO user) throws DALException {
		// TODO Auto-generated method stub

	}

	@Override
	public void updateUser(UserDTO user) throws DALException {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteUser(int userId) throws DALException {
		// TODO Auto-generated method stub

	}

}
