import { Component, Input } from '@angular/core';
import { Receipe } from 'src/app/receipes/receipe.model';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipesDetailComponent {
  @Input() receipe: Receipe
}
