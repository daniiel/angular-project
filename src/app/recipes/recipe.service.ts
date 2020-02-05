import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('Food', 'This is a simply a test',
      'https://www.diabetes.org/sites/default/files/styles/crop_large/public/2019-06/Healthy%20Food%20Made%20Easy%20-min.jpg',
      [new Ingredient('tomatoes', 2),
        new Ingredient('fish', 1)]
    ),
    new Recipe('Apples', 'This is a simply a test',
      'https://www.publicdomainpictures.net/pictures/280000/velka/halloween-food-1540991311RNl.jpg',
      [new Ingredient('apples', 2)]
      )
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // return a new array, get  copy
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
