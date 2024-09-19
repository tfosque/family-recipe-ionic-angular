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
  @Input() index: number | null = null;
  showRowLine = "inset";
  favIcon = false;

  constructor(
    private readonly recipeSvc: RecipeService
  ) { }

  ngOnInit() {
    this.showRowLine = this.recipe.showLines ? "inset" : "none"; // inset, full, or none
  }

  onClick() {
    // send selected recipe to recipeService
    this.recipeSvc.setSelectedRecipe( this.recipe );
  }

  onToggleFavIcon( event: any ) {
    // heart - outline || heart    
    this.favIcon = !this.favIcon;
    console.log( 'this.favIcon', this.favIcon, { event } )
  }
}
