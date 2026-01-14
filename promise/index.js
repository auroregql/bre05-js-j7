// ecrire une fonction qui retourne une promise
function ageTest (age){
    
    return new Promise ((resolve, reject) => {
        
    //si l'age est supérieur ou égal a 18 alors la promise autorise
        if (age >= 18) {
            resolve("Autorisation accordée");
        }
    //sinon elle rejete 
        else {
            reject("autorisation rejetée");
        }
        
    });
}

//tests avec les ages 42 et 16

ageTest(42)
    .then(response => console.log(response))
    .catch(error => console.log(error));
    
ageTest(16)
    .then(response => console.log(response))
    .catch(error => console.log(error));