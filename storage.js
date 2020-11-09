class Storage {

    constructor()
    {
        this.city;
        this.defaultCity='Jalandhar';
    }

    getData()
    {
        if(localStorage.getItem('city') === null)
        {
            this.city=this.defaultCity;
            this.setData(this.city);
        }
        else
        {
            this.city=localStorage.getItem('city');
        }
        return this.city;
    }

    setData(city)
    {
        localStorage.clear();
        localStorage.setItem('city',city);
    }
}