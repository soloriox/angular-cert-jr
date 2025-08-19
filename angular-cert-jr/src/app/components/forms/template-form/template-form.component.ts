import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  constructor(){}

  person = {
    fullName: '',
    email: ''
  }

  process():void {
    console.log("Name: " + this.person.fullName + " - Mail: " + this.person.email)
  }

}
