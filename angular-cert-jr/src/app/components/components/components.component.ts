import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [FormsModule, ChildComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css'
})
export class ComponentsComponent {

  firstName = 'Abraham';
  initialCount = 18;
  nickName = '';

  /*Child Output subscription*/
  getNickName(nickName: string){
    this.nickName = nickName;
  }

}
