import { Component, Input } from '@angular/core';
import { Receipe } from 'src/app/receipes/receipe.model';
import { ReceipeService } from '../../receipe.service';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css'],
})
export class ReceipeItemComponent {
  @Input() 'receipe': Receipe;

  constructor(private receipeService: ReceipeService){}

  onSelected(selectedReceipe: Receipe, event: PointerEvent) {
    console.log(typeof event);
    console.log(event);
    console.log(selectedReceipe);
    console.log(typeof selectedReceipe);
    this.receipeService.receipeSelected.emit(this.receipe);
  }
}