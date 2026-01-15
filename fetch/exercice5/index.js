let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/users"
);
// Récupération des données de l'url avec fetch
window.fetch(url)
    
    .then(response => response.json())
    .then(user => {
        
        //Création du tableau
        let table = document.createElement('table');
        
        //Création de l'en-tête
        let thead = document.createElement('thead');
        let headerRow = document.createElement('tr');
        
        //Contenu de l'en-tête
        let th1 = document.createElement("th");
        let th1Text = document.createTextNode("UserName");
        th1.appendChild(th1Text);
        document.body.appendChild(th1);
        
        let th2 = document.createElement("th");
        let th2Text = document.createTextNode("FirstName");
        th2.appendChild(th2Text);
        document.body.appendChild(th2);
        
        let th3 = document.createElement("th");
        let th3Text = document.createTextNode("LastName");
        th3.appendChild(th3Text);
        document.body.appendChild(th3);
        
        let th4 = document.createElement("th");
        let th4Text = document.createTextNode("Email");
        th4.appendChild(th4Text);
        document.body.appendChild(th4);
        
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        //Création du corps de tableau
        let tbody = document.createElement('tbody');
        let row = document.createElement('tr');
        
        let td1 = document.createElement("td");
        let td1Text = document.createTextNode(user.data.username);
        td1.appendChild(td1Text);
        document.body.appendChild(td1);
        
        let td2 = document.createElement("td");
        let td2Text = document.createTextNode(user.data.firstName);
        td2.appendChild(td2Text);
        document.body.appendChild(td2);
        
        let td3 = document.createElement("td");
        let td3Text = document.createTextNode(user.data.lastName);
        td3.appendChild(td3Text);
        document.body.appendChild(td3);
        
        let td4 = document.createElement("td");
        let td4Text = document.createTextNode(user.data.email);
        td4.appendChild(td4Text);
        document.body.appendChild(td4);

        tbody.appendChild(row);
        table.appendChild(tbody);
        
        document.body.appendChild(table);
})

.catch(err => console.error(err));