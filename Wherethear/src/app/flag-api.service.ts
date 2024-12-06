import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlagApiService {

  constructor() { }

  async getFlagUrl(countryName: String) : Promise<any>{
    const data = await fetch('https://restcountries.com/v3.1/name/'+countryName);
    return(data.json()); 
  }
}
