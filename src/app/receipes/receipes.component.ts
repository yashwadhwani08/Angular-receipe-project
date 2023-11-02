import { Component, OnInit } from '@angular/core';
import { Receipe } from 'src/app/receipes/receipe.model';
import { ReceipeService } from './receipe.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css'],
})
export class ReceipesComponent implements OnInit {
  selectedReceipe: Receipe;

  constructor(private receipeService: ReceipeService) {}

  ngOnInit() {
    this.receipeService.receipeSelected.subscribe((receipe: Receipe) => {
      this.selectedReceipe = receipe;
    });
  }
}
