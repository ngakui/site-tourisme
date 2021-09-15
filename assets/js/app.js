fetch("/api/records/1.0/search/?dataset=zones-touristiques-internationales&q=&facet=name")
    .then(response => console.log(response.json()))
    .then(response => alert(JSON.stringify(response)))
    .catch(error => alert("Erreur : " + error));
