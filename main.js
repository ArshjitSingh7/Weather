const storage=new Storage();
const city=storage.getData();
const weather=new Weather(city);
const ui=new UI();

document.addEventListener('DOMContentLoaded',getWeather);

function getWeather()
{
    weather.getWeather()
     .then(data => {
        if(data.cod === "404")
        {
            ui.showAlert('Enter a valid City')
        }
        else{
            ui.showData(data);
            storage.setData(data.name);
        }
         
     })
}


document.querySelector('.save-data').addEventListener('click',(e)=> {
    
    const cityName=document.querySelector('.cityName').value;
    weather.changeLoaction(cityName);
    getWeather();
    e.preventDefault();
})