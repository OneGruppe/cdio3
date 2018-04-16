$(document).ready(function() {

    $("#createUserContainer").hide();
    $("#showAllUsersContainer").hide();
    $("#showUserContainer").hide();

    $("#createUser").click(function() {
        $(".frontPage").slideUp(400);
        $("#createUserContainer").slideDown(400);
    })

    $("#showAllUsers").click(function() {
         $(".frontPage").slideUp(400);
         $("showAllUsersContainer").slideDown(400);

    })
    
    $("#showUser").click(function() {
        $(".frontPage").slideUp(400);
        $("showUserContainer").slideDown(400);
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