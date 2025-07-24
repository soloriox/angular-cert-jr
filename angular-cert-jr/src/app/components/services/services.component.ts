import { Component } from '@angular/core';
import { GreetingsService } from '../../services/greetings.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  
  
  constructor(private grettingService: GreetingsService){ }

  loading: boolean = false;
  imageUrl: string = ""; 

  ngOnInit(): void{
    console.log("Services Component - ngOnInit");
    this.loadDogImage();
  }

  loadDogImage(): void{ 
    this.loading = true;
    this.grettingService.getRandomDog().subscribe({
      next: (response) => {
        this.imageUrl = response.message;
        this.loading = false;
      }
    });
  }
}
