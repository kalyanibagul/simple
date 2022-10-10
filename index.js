function createUserName(){
     UserName = "Bill";
}

function modifyUserName(){
    if (UserName)
    UserName = "steve";

};

function showUserName(){

    alert(UserName);
}

createUserName();
showUserName();