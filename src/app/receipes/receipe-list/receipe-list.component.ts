import { Component } from '@angular/core';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipesListComponent {
  receipes: Receipe[] = [
    new Receipe('A test Reciepe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVh0JUzd3dQS45AyORhwOqMVQpXF9qBzghTjjbAmgyu-8JE5TKRdgxjBeo152R2F7Z3wFhq9-nrNM&usqp=CAU&ec=48600112'),
    new Receipe('A test Reciepe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVh0JUzd3dQS45AyORhwOqMVQpXF9qBzghTjjbAmgyu-8JE5TKRdgxjBeo152R2F7Z3wFhq9-nrNM&usqp=CAU&ec=48600112')
  ];

  constructor() {}

  ngOnInit() {

  }

}
