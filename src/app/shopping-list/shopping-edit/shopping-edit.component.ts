import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  // newIngredient: Ingredient = {name:'', amount:null};

  constructor(private shoppingListService: ShoppingListService){}

  onAddClick(event: PointerEvent){
    console.log(typeof(event));
    console.log(event);
    const newIngredientName = this.nameInput.nativeElement.value;
    const newIngredientAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(newIngredientName, newIngredientAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
