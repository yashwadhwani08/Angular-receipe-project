import { Component, Input } from '@angular/core';
import { Receipe } from 'src/app/receipes/receipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent {
  @Input() 'receipe': Receipe;
  receipes: any[] = [];

}
