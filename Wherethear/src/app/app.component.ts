import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherApiService } from './weather-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor( private WeatherApi : WeatherApiService ){
    
  }
  weather : any = null;
  ngOnInit(){
    this.WeatherApi.getWeatherData('London').then((data)=>console.log(data));
  }
  title = 'Wherethear';

}
