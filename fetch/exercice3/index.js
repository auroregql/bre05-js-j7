let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/create-user"
);

let formData = new FormData();
formData.append('username', "auroregql");
formData.append('firstName', "Aurore");
formData.append('lastName', "GICQUEL");
formData.append('email', "aurore.gicquel-colleu@3wa.io");

window.fetch(url, {
    method: 'POST',
    body: formData
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

    