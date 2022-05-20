
const getWeather = async () => {
  document.getElementById('myChart').innerHTML = '';
  const myChart = '';
const input = document.getElementById('tx').value;
const url = `https://api.waqi.info/feed/${input}/?token=f7be406c172c4c0b64c13a98f0740df1b83ddc30`;
const res = await fetch(url);
const data = await res.json();
console.log(data)
graph(data.data)
}


const graph = (data) => {

    const labels = Object.keys(data.iaqi)
    const converData = Object.values(data.iaqi).map((item) => item.v)
    console.log(converData)
  
    const dataConfig = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: converData,
      }]
    };
  
  
    const config = {
      type: 'bar',
      data: dataConfig,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
  
    myChart = new Chart(
      document.getElementById('myChart'),
      config
    )
  
}


