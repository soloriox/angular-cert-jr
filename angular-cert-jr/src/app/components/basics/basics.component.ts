import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-basics',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.css'
})
export class BasicsComponent {

}
