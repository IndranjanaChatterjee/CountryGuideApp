
search.addEventListener("click", () => {
    let country;
    country = document.getElementById("country").value;
    if (country == '' || country == null) {
        document.getElementById("text").innerHTML="";
        document.getElementById("no").style.visibility = "visible";
        document.getElementById("flag").style.visibility = "hidden";
    }
    else {
        document.getElementById("no").style.visibility="hidden";
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
            document.getElementById("f").src = `${val[0].flags.png}`;
            document.getElementById("flag").style.visibility = "visible";
            document.getElementById("country").value = "";
        }

    )}

})
