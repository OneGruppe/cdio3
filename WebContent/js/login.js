$(document).ready(function(){
    $("#createUserContainer").hide();
    $("#showAllUsersContainer").hide();
    $("#showUserContainer").hide();

    $("#frontPage").click(function(){
        $("#createUserContainer").hide(500);
        $("#showAllUsersContainer").hide(500);
        $("#ShowUserContainer").hide(500);
    })

    $("#createUser").click(function(){
        $("#frontPage").hide(500);
        $("#showAllUsersContainer").hide(500);
        $("#showUserContainer").hide(500);
        $("#createUserContainer").show(500);
    })

    $("#showAllUsers").click(function()
    {
         alert("Test virker");
    })
    
    $("#showUser").click(function() 
    {
        alert("Test virker");		        		
    })
    
    $("#logout").click(function() 
    {
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