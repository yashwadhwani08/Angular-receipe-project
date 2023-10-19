import { Component, EventEmitter, ViewChild, Output, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() addIngredient = new EventEmitter<Ingredient>();
  // newIngredient: Ingredient = {name:'', amount:null};

  onAddClick(event: PointerEvent){
    console.log(typeof(event));
    console.log(event);
    const newIngredientName = this.nameInput.nativeElement.value;
    const newIngredientAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(newIngredientName, newIngredientAmount)
    this.addIngredient.emit(newIngredient);
  }

}
