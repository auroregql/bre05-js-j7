window.addEventListener("DOMContentLoaded", function(){
    let username = window.prompt("Quel est votre prénom ?");
    
    localStorage.setItem("username", username);
    
    window.alert("Salut" + username);
});