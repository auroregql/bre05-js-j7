let data = {
    firstName : "Harry",
    lastName : "Bow",
    motto : "C'est beau la vie !"
};

let str = "{\"firstName\":\"Colonel\",\"lastName\":\"Sanders\",\"motto\":\"Il est bon mon poulet\"}";

document.addEventListener("DOMContentLoaded", function(){

    JSON.stringify(data);
    
    console.log(data);
    
    JSON.parse(str);
    
    console.log(str);
});