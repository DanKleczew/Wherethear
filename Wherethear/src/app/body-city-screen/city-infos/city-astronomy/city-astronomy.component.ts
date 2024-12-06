import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-astronomy',
  standalone: true,
  imports: [],
  templateUrl: './city-astronomy.component.html',
  styleUrl: './city-astronomy.component.css'
})
export class CityAstronomyComponent {
  @Input() sunrise !: String;
  @Input() moonrise !: String;
  @Input() moonphase !: String;
}
