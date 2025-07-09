import { Component, model } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  count = model<number>(0);

  updateCount(amount: number): void{
    this.count.update(currentCount => currentCount + amount);
  }

}
