import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Receipe } from 'src/app/receipes/receipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent {
  @Output() 'receipeSelected' = new EventEmitter<void>();
  @Input() 'receipe': Receipe;
  

  onSelected(selectedReceipe: Receipe, event: PointerEvent){
    console.log(typeof(event));
    console.log(event);
    console.log(selectedReceipe);
    console.log(typeof(selectedReceipe));
    this.receipeSelected.emit();
  }

}
