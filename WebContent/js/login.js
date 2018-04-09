$(document).ready(function(){
    $("#slet bruger").click(function(){

    })
    $("Opret bruger").click(function(){
        newUser(username, password, ini, CPR, rolle);
    })
});

function newUser(username, password, ini, CPR, rolle) {
    this.username = username;
    this.password = password;
    this.ini = ini;
    this.CPR = CPR;
    this.rolle = rolle;
}