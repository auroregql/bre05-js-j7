let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/user/18"
);

//Récupération des infos avec fetch 
window.fetch(url)
    
    .then(response => response.json())
    .then(user => {
    
    //Création du h1, du texte dans le h1, puis de le positionner dans le body
    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode(user.data.username);
    h1.appendChild(h1Text);
    document.body.appendChild(h1);
    
    //Création du h2, du texte dans le h2, puis de le positionner dans le body
    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode(user.data.firstName + user.data.lastName);
    h2.appendChild(h2Text);
    document.body.appendChild(h2);
    
    //Création du h3, du texte dans le h3, puis de le positionner dans le body
    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode(user.data.email);
    h3.appendChild(h3Text);
    document.body.appendChild(h3);

})
.catch(err => console.error(err));
