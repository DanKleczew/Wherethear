import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormatDatePipe } from '../../format-date.pipe';

@Component({
  selector: 'app-city-infos',
  standalone: true,
  imports: [CommonModule, FormatDatePipe],
  templateUrl: './city-infos.component.html',
  styleUrl: './city-infos.component.css'
})
export class CityInfosComponent {
  @Input() localTime !: string;
  @Input() text ?: String;
  @Input() icon ?: String;
  @Input() temperature : number =0;
  @Input() precipitations : number = 0;
  @Input() humidity : number = 0;

  ngOnInit(){console.log(this.localTime);
  }

}
