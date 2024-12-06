import { Component } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';
import { CityTitleComponent } from "./city-title/city-title.component";
import { CityInfosComponent } from "./city-infos/city-infos.component";
import { CityImageComponent } from "./city-infos/city-image/city-image.component";
import { CityAstronomyComponent } from "./city-infos/city-astronomy/city-astronomy.component";
import { MainButtonComponent } from "../main-button/main-button.component";
import { FlagApiService } from '../flag-api.service';

@Component({
  selector: 'app-body-city-screen',
  standalone: true,
  imports: [CityTitleComponent, CityInfosComponent, CityImageComponent, CityAstronomyComponent, MainButtonComponent],
  templateUrl: './body-city-screen.component.html',
  styleUrl: './body-city-screen.component.css'
})
export class BodyCityScreenComponent {
    constructor( private weatherService : WeatherApiService, private flagApi : FlagApiService){ 
    }

    weather : any = null;
    randomCity : string = '';

    cityName?: String;
    countryName!: String;
    localTime?: String;
    temperature!: number;
    weatherText?: String;
    weatherIcon?: String;
    precipitations!: number;
    humidity!: number;
    sunrise!: string;
    moonrise!: string;
    moonphase!: string;
    isSunUp?: boolean;

    flagUrl!: String;

    ngOnInit(){
      let a = Math.floor(Math.random() * this.allCities.length);
      this.randomCity = this.allCities[a];
      this.weatherService.getWeatherData(this.randomCity).then((data)=>this.alimentData(data))
      .then(()=>this.flagApi.getFlagUrl(this.countryName)).then((data)=>this.alimentFlag(data));
    }
    alimentData(weather : any){
      this.cityName = weather.location.name;
      this.countryName = weather.location.country; 
      this.localTime = weather.location.localtime;
      this.temperature = weather.current.temp_c;
      this.weatherText = weather.current.condition.text;
      this.weatherIcon = weather.current.condition.icon;
      this.precipitations = weather.current.precip_mm;
      this.humidity = weather.current.humidity;
      this.sunrise = weather.forecast.forecastday[0].astro.sunrise;
      this.moonrise = weather.forecast.forecastday[0].astro.moonrise;
      this.moonphase = weather.forecast.forecastday[0].astro.moon_phase;
      this.isSunUp = weather.forecast.forecastday[0].astro.is_sun_up = 1 ? true: false; 
    }
    alimentFlag(data : any){
      this.flagUrl = data[0].flags.png;
      console.log(this.flagUrl);
    }

    allCities : string[] = [
      "Tokyo",
      "Delhi",
      "Shanghai",
      "São Paulo",
      "Mexico City",
      "Cairo",
      "Mumbai",
      "Beijing",
      "Dhaka",
      "Osaka",
      "New York",
      "Karachi",
      "Buenos Aires",
      "Chongqing",
      "Istanbul",
      "Kolkata",
      "Lagos",
      "Kinshasa",
      "Manila",
      "Rio de Janeiro",
      "Guangzhou",
      "Lahore",
      "Shenzhen",
      "Bangalore",
      "Moscow",
      "Tianjin",
      "Jakarta",
      "London",
      "Lima",
      "Bangkok",
      "Seoul",
      "Chennai",
      "Bogotá",
      "Hyderabad",
      "Wuhan",
      "Chengdu",
      "Nagoya",
      "Kuala Lumpur",
      "Tehran",
      "Chicago",
      "Luanda",
      "Baghdad",
      "Nanjing",
      "Hong Kong",
      "Hanoi",
      "Shenyang",
      "Riyadh",
      "Ahmedabad",
      "Singapore",
      "Paris",
      "Yangon",
      "Los Angeles",
      "Abidjan",
      "Cape Town",
      "Madrid",
      "Kabul",
      "Dubai",
      "Casablanca",
      "Berlin",
      "Pune",
      "Kano",
      "Durban",
      "Busan",
      "Lusaka",
      "Fuzhou",
      "Addis Ababa",
      "Giza",
      "Salvador",
      "Kiev",
      "Quezon City",
      "Kanpur",
      "Medan",
      "Phoenix",
      "Surat",
      "Jaipur",
      "Guayaquil",
      "Khartoum",
      "Faisalabad",
      "Aleppo",
      "Izmir",
      "Caracas",
      "Sydney",
      "Curitiba",
      "Santiago",
      "Dar es Salaam",
      "Lucknow",
      "Belo Horizonte",
      "Ankara",
      "Melbourne",
      "Montreal",
      "Warsaw",
      "Bamako",
      "Nagpur",
      "Milan",
      "Porto Alegre",
      "Munich",
      "Bandung",
      "Damascus",
      "Medellín",
      "Guatemala City",
      "Cali",
      "Lisbon",
      "Stockholm",
      "Amman",
      "Hamburg",
      "Oslo",
      "Bucharest",
      "Brussels",
      "Turin",
      "Tashkent",
      "Douala",
      "Brasília",
      "Accra",
      "Lusaka",
      "Kampala",
      "Copenhagen",
      "Pretoria",
      "Dakar",
      "Tunis",
      "Havana",
      "Phnom Penh",
      "Beirut",
      "Zhengzhou",
      "Dalian",
      "Changsha",
      "Harbin",
      "Shijiazhuang",
      "Xian",
      "Jinan",
      "Hangzhou",
      "Changchun",
      "Taiyuan",
      "Kunming",
      "Changzhou",
      "Quanzhou",
      "Suzhou",
      "Hefei",
      "Xiamen",
      "Nanchang",
      "Foshan",
      "Dongguan",
      "Urumqi",
      "Ürümqi",
      "Lanzhou",
      "Handan",
      "Rabat",
      "Tbilisi",
      "Skopje",
      "Tirana",
      "Port Moresby",
      "Nouméa",
      "Banjul",
      "Malabo",
      "Windhoek",
      "Honiara",
      "Majuro",
      "Apia",
      "Pago Pago",
      "Funafuti",
      "Port-Vila",
      "Palikir",
      "Suva",
      "Tarawa",
      "Melekeok",
      "Yaren",
      "Basseterre",
      "Castries",
      "Saint John's",
      "Roseau",
      "Bridgetown",
      "Kingstown",
      "Georgetown",
      "Victoria",
      "Port Louis",
      "Bissau",
      "Praia",
      "Conakry",
      "Freetown",
      "Monrovia",
      "Moroni",
      "Antananarivo",
      "Mbabane",
      "Lilongwe",
      "Gaborone",
      "Djibouti",
      "Asunción",
      "La Paz",
      "Sucre",
      "Montevideo",
      "Paramaribo",
      "Belmopan",
      "Tegucigalpa",
      "San Salvador",
      "Managua",
      "Panama City",
      "Port-au-Prince",
      "Kingston",
      "Nassau",
      "Guatemala City",
      "San José",
      "Belmopan",
      "Castries",
      "Basseterre",
      "Saint John's",
      "Roseau",
      "Bridgetown",
      "Havana",
      "Santo Domingo",
      "San Juan",
      "Basse-Terre",
      "Marigot",
      "Road Town",
      "Charlotte Amalie",
      "Philipsburg",
      "Willemstad",
      "Oranjestad",
      "Kralendijk",
      "Kingstown"
  ];
}
