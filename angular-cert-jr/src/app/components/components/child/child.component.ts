import { Component, model, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  /* Data Binding two ways */  
  count = model<number>(0);
  updateCount(amount: number): void{
    this.count.update(currentCount => currentCount + amount);
  }

  /* Input & Output */
  @Input() inheritedValue = "";
  
  @Output() nickNameEvent = new EventEmitter<string>();

  addNickName(){
    this.nickNameEvent.emit("El Cremas");
  }

}
