import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor() { }

  async getWeatherData(cityName: String) : Promise<any>{
    const data = await fetch('https://api.weatherapi.com/v1/forecast.json?key=0408a34e3a8540858a1213100240512&q='+ cityName +'&days=1&aqi=no&alerts=no');
    return(data.json()); 
  }
}
