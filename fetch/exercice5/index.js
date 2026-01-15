let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/users"
);

// Récupération des données de l'url avec fetch
window.fetch(url)
    .then(response => response.json())
    .then(user => {

        // Création du tableau
        let table = document.createElement('table');

        // Création de l'en-tête
        let thead = document.createElement('thead');
        let headerRow = document.createElement('tr');

        let th1 = document.createElement("th");
        th1.appendChild(document.createTextNode("UserName"));
        headerRow.appendChild(th1);

        let th2 = document.createElement("th");
        th2.appendChild(document.createTextNode("FirstName"));
        headerRow.appendChild(th2);

        let th3 = document.createElement("th");
        th3.appendChild(document.createTextNode("LastName"));
        headerRow.appendChild(th3);

        let th4 = document.createElement("th");
        th4.appendChild(document.createTextNode("Email"));
        headerRow.appendChild(th4);

        thead.appendChild(headerRow);
        table.appendChild(thead);

        //Création du corps du tableau
        let tbody = document.createElement('tbody');

        for (let i = 0; i < user.data.length; i++) {

            let row = document.createElement('tr');

            let td1 = document.createElement("td");
            td1.appendChild(document.createTextNode(user.data[i].username));
            row.appendChild(td1);

            let td2 = document.createElement("td");
            td2.appendChild(document.createTextNode(user.data[i].firstName));
            row.appendChild(td2);

            let td3 = document.createElement("td");
            td3.appendChild(document.createTextNode(user.data[i].lastName));
            row.appendChild(td3);

            let td4 = document.createElement("td");
            td4.appendChild(document.createTextNode(user.data[i].email));
            row.appendChild(td4);

            tbody.appendChild(row);
        }

        table.appendChild(tbody);
        document.body.appendChild(table);
    })
    .catch(err => console.error(err));
