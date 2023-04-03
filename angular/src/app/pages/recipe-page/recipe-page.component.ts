import { map } from 'rxjs';
import { RecipeService } from './../../services/recipe.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss'],
})
export class RecipePageComponent {
  private recipeService = inject(RecipeService);

  categories$ = this.recipeService
    .getCategories$()
    .pipe(map(({ categories }) => categories));
}
