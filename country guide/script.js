
search.addEventListener("click",()=>
{
    let country;
    country=document.getElementById("country").value;
    let url=`https://restcountries.com/v3.1/name/${country}?fullText=true`;
    let p=fetch(url);
    p.then((value)=>
    {
        return (value.json());
    }).then((val)=>
    {
        console.log(val);
        document.getElementById("text").innerHTML=`<p>Population:${val[0].population}</p>
        <br>
        <p>Region:${val[0].region}</p>
        <br>
        <p>Capital:${val[0].capital}</p>
        <br>
        <p>Continent:${val[0].continents}</p>
        <br>
        <p>Area covered:${val[0].area}</p>
        <br>
        <p>Time Zones:${val[0].timezones}</p>`;
        document.getElementById("country").value="";

    })

})