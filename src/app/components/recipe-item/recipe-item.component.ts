import { Component, input, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component( {
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
} )
export class RecipeItemComponent implements OnInit {
  @Input() recipe: any = {}
  @Input() letter: string = '';

  constructor(
    private readonly recipeSvc: RecipeService
  ) { }

  ngOnInit() { }

  onClick() {
    // send selected recipe to recipeService
    this.recipeSvc.setSelectedRecipe( this.recipe );
  }

}
