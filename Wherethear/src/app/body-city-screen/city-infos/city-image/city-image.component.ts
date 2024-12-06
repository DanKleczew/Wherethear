import { Component, Input } from '@angular/core';
import { FlagApiService } from '../../../flag-api.service';

@Component({
  selector: 'app-city-image',
  standalone: true,
  imports: [],
  templateUrl: './city-image.component.html',
  styleUrl: './city-image.component.css'
})
export class CityImageComponent {

  @Input() flagUrl !: String;
}
