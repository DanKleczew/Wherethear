import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-title',
  standalone: true,
  imports: [],
  templateUrl: './city-title.component.html',
  styleUrl: './city-title.component.css'
})
export class CityTitleComponent {
  @Input() cityName ?: String;
  @Input() countryName ?: String;
}
