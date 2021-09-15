function data() {
    fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=zones-touristiques-internationales&q=&facet=name')
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log('Fetch Error', err);
        });
}
data();
