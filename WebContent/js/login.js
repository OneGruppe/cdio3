$(document).ready(function() {
    $("#createUserContainer").hide();
    $("#showAllUsersContainer").hide();
    $("#showUserContainer").hide();

    $("#frontPage").click(function() {
        $("#createUserContainer").hide(500);
        $("#showAllUsersContainer").hide(500);
        $("#ShowUserContainer").hide(500);
    })

    $("#createUser").click(function() {
        $("#frontPage").hide(500);
        $("#showAllUsersContainer").hide(500);
        $("#showUserContainer").hide(500);
        $("#createUserContainer").show(500);
    })

    $("#showAllUsers").click(function() {
         $("frontPage").hide(500);
         $("showUserContainer").hide(500);
         $("createUserContainer").hide(500);
         $("showAllUsersContainer").show(500);

    })
    
    $("#showUser").click(function() {
        $("frontPage").hide(500);
        $("createUserContainer").hide(500);
        $("showAllUsersContainer").hide(500);
        $("showUserContainer").show(500);
    })
    
    $("#logout").click(function() {
        alert("Test virker");		        		
    })
});

function newUser(username, password, ini, CPR, role) {
    this.username = username;
    this.password = password;
    this.ini = ini;
    this.CPR = CPR;
    this.role = role;
}