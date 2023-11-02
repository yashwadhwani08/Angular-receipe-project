import { EventEmitter, Injectable } from '@angular/core';
import { Receipe } from './receipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class ReceipeService {
  receipeSelected = new EventEmitter<Receipe>();

  private receipes: Receipe[] = [
    new Receipe(
      'A Tasty Cake',
      "A super tasty cake - cake claories don't count!",
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVh0JUzd3dQS45AyORhwOqMVQpXF9qBzghTjjbAmgyu-8JE5TKRdgxjBeo152R2F7Z3wFhq9-nrNM&usqp=CAU&ec=48600112',
      [
        new Ingredient('Milk Powder', 5),
        new Ingredient('Refined Wheat Flour', 2),
      ]
    ),
    new Receipe(
      'Crispy Fries',
      "Everyone's favourite. A must try!",
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/French_Fries.JPG/375px-French_Fries.JPG',
      [new Ingredient('Boiled Potato', 5), new Ingredient('Ketchup', 5)]
    ),
  ];

  getReceipes() {
    // return this.receipes; // this way we would be passig the actual array, typical JS behaviour

    return this.receipes.slice(); //This returns a copy of array not the actual array!
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    //this approach will emit too many events as addIngredient as an emit in it
    // ingredients.map((ingredient: Ingredient) => {
    //   this.shoppingListService.addIngredient(ingredient);
    // });

    // this approach emits a single event as written in the logic of addIngredients()
    this.shoppingListService.addIngredients(ingredients);
  }

  constructor(private shoppingListService: ShoppingListService) {}
}
