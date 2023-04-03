import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const BASE_URL = `https://www.themealdb.com/api/json/v1/1/`;

export type Category = {
  idCategory: `${number}`,
  strCategory: string,
  strCategoryThumb: string,
  strCategoryDescription: string
  };

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private http = inject(HttpClient);

  getCategories$() {
    return this.http
      .get<{ categories: Category[] }>(BASE_URL + `/categories.php`)
      .pipe(tap(console.log));
  }

  getRecipe$(recipeId: string | number) {
    return this.http
      .get(BASE_URL + `lookup.php?i=${recipeId}`)
      .pipe(tap(console.log));
  }
}
