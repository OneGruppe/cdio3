$(document).ready(function() {
    $("#createUser").load("createUser.html");
    
    $("#showUser").click(function() {
        alert("show User test DING");
    })
    
    $("#logout").click(function() {
        alert("Tilbage til login side");		        		
    })
});

function newUser(username, password, ini, CPR, role) {
    this.username = username;
    this.password = password;
    this.ini = ini;
    this.CPR = CPR;
    this.role = role;
}