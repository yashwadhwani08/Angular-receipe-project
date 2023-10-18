import { Component } from '@angular/core';
import { Receipe } from 'src/app/receipes/receipe.model';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css']
})
export class ReceipesComponent {
  selectedReceipe: Receipe;

}
