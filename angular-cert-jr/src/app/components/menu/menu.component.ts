import {Component} from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import {MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatListModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})

export class MenuComponent {
  
}
