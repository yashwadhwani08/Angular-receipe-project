import { EventEmitter, Injectable } from '@angular/core';
import { Receipe } from './receipe.model';

@Injectable({
  providedIn: 'root',
})
export class ReceipeService {
  receipeSelected = new EventEmitter<Receipe>();

  private receipes: Receipe[] = [
    new Receipe(
      'A test Reciepe',
      'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVh0JUzd3dQS45AyORhwOqMVQpXF9qBzghTjjbAmgyu-8JE5TKRdgxjBeo152R2F7Z3wFhq9-nrNM&usqp=CAU&ec=48600112'
    ),
    new Receipe(
      'Another test Reciepe',
      'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVh0JUzd3dQS45AyORhwOqMVQpXF9qBzghTjjbAmgyu-8JE5TKRdgxjBeo152R2F7Z3wFhq9-nrNM&usqp=CAU&ec=48600112'
    ),
  ];

  getReceipes() {
    // return this.receipes; // this way we would be passig the actual array, typical JS behaviour

    return this.receipes.slice(); //This returns a copy of array not the actual array!
  }

  constructor() {}
}
