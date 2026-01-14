// creation de l'objet

let user = {
  firstName: "Harry",
  lastName: "Bow",
  motto: "C'est beau la vie !"
};

// chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
 
//Récupération des données de l'objet 
  let data = sessionStorage.getItem("user");

//Si les données sont inexistantes mettre Objet en JSON
  if (data === null) {
    sessionStorage.setItem("user", JSON.stringify(user));
    
// Sinon mettre l'objet en variable Javascript
  } else {
    user = JSON.parse(data);
    console.log(user);
  }
});