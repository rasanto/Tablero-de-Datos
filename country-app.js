
const country_info = async () => {
const inpunt = document.getElementById('tx').value;
const url = `https://restcountries.com/v2/${inpunt}/Canada?fullText=true`;
const res = await fetch(url);
const data = await res.json();
console.log(data)
info(data[0]);


}


const info = (dato) => {
const elem = document.getElementById('inf');
elem.innerHTML = `<h2>${dato.name}<h2/>
<p>Population = ${dato.population}<p/>
`

}

country_info();
