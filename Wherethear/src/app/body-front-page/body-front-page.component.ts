import { Component } from '@angular/core';
import { MainButtonComponent } from "../main-button/main-button.component";

@Component({
  selector: 'app-body-front-page',
  standalone: true,
  imports: [MainButtonComponent],
  templateUrl: './body-front-page.component.html',
  styleUrl: './body-front-page.component.css'
})
export class BodyFrontPageComponent {

}
