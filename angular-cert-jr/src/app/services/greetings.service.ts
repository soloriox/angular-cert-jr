import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';    // Use 'Inyectable Lib from core'
import { Observable } from 'rxjs';
import { DogServiceResponse } from '../interfaces/dog-service-response';

@Injectable({                                  // @Inyectable Decorator
  providedIn: 'root'                           // Define the level
})
export class GreetingsService {

  private url = "https://dog.ceo/api/breeds/image/random";

  constructor(private httpClient: HttpClient) { } 

  getRandomDog(): Observable<DogServiceResponse>{
    console.log("Getting Random Dog from " + this.url);
    return this.httpClient.get<DogServiceResponse>(this.url);
  }

  private handleError(error: HttpErrorResponse){

  }
}
