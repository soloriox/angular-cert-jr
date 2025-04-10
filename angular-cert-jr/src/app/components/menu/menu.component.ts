import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MenuComponent {
  
  sideBarOpened:boolean = false;

  toogleNav(){
    this.sideBarOpened = !this.sideBarOpened;
  }
}
