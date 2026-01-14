let user = {
    firstName : "Harry",
    lastName : "Bow",
    motto : "C'est beau la vie !"
};

 

document.addEventListener("DOMContentLoaded", function(){

    sessionStorage.getItem("user");
    
    JSON.stringify(user);
    
    sessionStorage.setItem("user");
   
});