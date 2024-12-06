import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-button',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.css'
})
export class MainButtonComponent {
  changePicture() {
    if (this.pictureSrc === './assets/5213449.png'){
      this.pictureSrc = './assets/10480648.png';
    } else {
      this.pictureSrc = './assets/5213449.png';
    }
  }

pictureSrc: String = './assets/5213449.png';
}
