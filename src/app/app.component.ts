import { Component } from '@angular/core';
import { RecipeService } from './services/recipe.service';

@Component( {
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
} )
export class AppComponent {

  constructor(
    private readonly recipeSvc: RecipeService
  ) { }

  ngOnInit(): void {
    this.recipeSvc.getLocalRecipes();
  }


}
