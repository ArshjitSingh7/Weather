class Weather
{
    constructor(city)
    {
        this.city=city;
        this.apiKey='71bbbbdb26e9308fa0ec2b4552167b14';
    }

    async getWeather()
    {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
        const data = await response.json();
        return data;
    }
    changeLoaction(name)
    {
        this.city=name;
    }
}