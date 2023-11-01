import { Component, EventEmitter, Output } from '@angular/core';
import { Receipe } from 'src/app/receipes/receipe.model';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css'],
})
export class ReceipesListComponent {
  @Output() receipeWasSelected = new EventEmitter<Receipe>();

  receipes: Receipe[];

  constructor(private receipeService: ReceipeService) {}

  ngOnInit() {
    this.receipes = this.receipeService.getReceipes();
  }

  onReceipeSelected(selectedReceipe: Receipe, event: any) {
    console.log('showDetailedReceipe function wworking!');
    console.log(typeof event);
    console.log(event);
    this.receipeWasSelected.emit(selectedReceipe);
  }
}
