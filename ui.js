class UI {
    constructor()
    {
        this.location=document.querySelector('.location');
        this.weatherReport=document.querySelector('.weather-report');
        this.temp=document.querySelector('.temp');
        this.humidity=document.querySelector('.humidity');
        this.feelsLike=document.querySelector('.feels-like');
        this.wind=document.querySelector('.wind');
        this.changeLocation=document.querySelector('.cityName');
    }

    showData(data)
    {
        this.location.innerText=`${data.name}, ${data.sys.country}`;
        this.weatherReport.innerText=`${data.weather[0].description}`;
        this.temp.innerHTML=`${Math.round(data.main.temp-273.15)}&deg;C`;
        this.humidity.innerText=`Relative Humidity : ${data.main.humidity}%`;
        this.feelsLike.innerHTML=`Feels Like : ${Math.round(data.main.feels_like-273.15)}&deg;C`;
        this.wind.innerText=`Wind Speed: ${data.wind.speed}m/s`;
        if(data.weather[0].main === 'Clear')
        document.body.style.background="url('img/clear.jpg') no-repeat center center /cover";
        else if(data.weather[0].main === 'Clouds')
        document.body.style.background="url('img/clouds.jpg') no-repeat center center /cover";
        else if(data.weather[0].main === 'Maze')
        document.body.style.background="url('img/maze.jpg') no-repeat center center /cover";
        else if(data.weather[0].main === 'Rain')
        document.body.style.background="url('img/rain.jpg') no-repeat center center /cover";
        else if(data.weather[0].main === 'Snow')
        document.body.style.background="url('img/snow.jpg') no-repeat center center /cover";
        else if(data.weather[0].main === 'Thunderstorm')
        document.body.style.background="url('img/thunderstorm.jpg') no-repeat center center /cover";
        else
        document.body.style.background="url('img/haze.jpg') no-repeat center center /cover";
    }
    showAlert(msg)
    {
        const div=document.createElement('div')
        div.className='alert alert-danger text-center';
        div.appendChild(document.createTextNode(msg));
        const parent=document.querySelector('.bg-img');
        const child=document.querySelector('.container');
        parent.insertBefore(div,child);

        setTimeout(function()
        {
            document.querySelector('.alert').remove()
        },2000);
    }
}