import { Component, Input } from '@angular/core';
import { Receipe } from 'src/app/receipes/receipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipesDetailComponent {
  @Input() receipe: Receipe

  // constructor(private shopppingListService: ShoppingListService){}
  // onClickToShoppingList(){
  //   this.receipe.ingredients.map((ingredient: Ingredient)=>{
  //     this.shopppingListService.addIngredient(ingredient)
  //   })
  // }
  constructor(private receipeService: ReceipeService){  
  }

  onClickToShoppingList(){
    this.receipeService.addIngredientsToShoppingList(this.receipe.ingredients);
  }

    
}
