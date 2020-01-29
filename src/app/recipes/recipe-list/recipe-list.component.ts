import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a simply a test',
        'https://www.diabetes.org/sites/default/files/styles/crop_large/public/2019-06/Healthy%20Food%20Made%20Easy%20-min.jpg'),
    new Recipe('Test Recipe', 'This is a simply a test',
        'https://www.publicdomainpictures.net/pictures/280000/velka/halloween-food-1540991311RNl.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
