
search.addEventListener("click", () => {
    let country;
    country = document.getElementById("country").value;
    let url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
    let p = fetch(url);
    p.then((value) => {
        return (value.json());
    }).then((val) => {
        console.log(val);
        document.getElementById("text").innerHTML = `
         <p>Name:${val[0].name.common}</p> 
        <p>Official Name:(${val[0].name.official})</p>
        <p>Population:${val[0].population}</p>
        
        <p>Region:${val[0].region}</p>
        
        <p>Capital:${val[0].capital}</p>
        
        <p>Continent:${val[0].continents}</p>
        
        <p>Area covered:${val[0].area}</p>
        
        <p>Time Zones:${val[0].timezones}</p>
        
        `;
        document.getElementById("f").src=`${val[0].flags.png}`;
        document.getElementById("country").value = "";

    })

})
