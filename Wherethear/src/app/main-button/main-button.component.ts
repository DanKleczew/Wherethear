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
    if (this.pictureRef === 'https://cdn-icons-png.flaticon.com/512/5213/5213449.png'){
      this.pictureRef = 'https://cdn-icons-png.flaticon.com/512/10480/10480648.png';
    } else {
      this.pictureRef = 'https://cdn-icons-png.flaticon.com/512/5213/5213449.png';
    }
  }

pictureRef: String = 'https://cdn-icons-png.flaticon.com/512/5213/5213449.png';
}
