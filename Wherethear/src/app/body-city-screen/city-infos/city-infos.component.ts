import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-infos',
  standalone: true,
  imports: [],
  templateUrl: './city-infos.component.html',
  styleUrl: './city-infos.component.css'
})
export class CityInfosComponent {
  @Input() localTime ?: String;
  @Input() text ?: String;
  @Input() icon ?: String;
  @Input() temperature : number =0;
  @Input() precipitations : number = 0;
  @Input() humidity : number = 0;

  ngOnInit(){console.log(this.localTime);
  }
}
