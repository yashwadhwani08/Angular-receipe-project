import { Component } from '@angular/core';
import { Receipe } from 'src/app/receipes/receipe.model';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css'],
})
export class ReceipesListComponent {
  receipes: Receipe[];

  constructor(private receipeService: ReceipeService) {}

  ngOnInit() {
    this.receipes = this.receipeService.getReceipes();
  }
}
