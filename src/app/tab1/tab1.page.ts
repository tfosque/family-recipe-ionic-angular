import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { BehaviorSubject } from 'rxjs';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import * as _ from 'lodash';

@Component( {
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
} )
export class Tab1Page {
  letters: any[] = [];
  recipes = new BehaviorSubject<any>( [] );
  emptyRecipes = false;

  constructor(
    private readonly recipeSvc: RecipeService
  ) {

  }

  ngOnInit(): void {
    // this.letters = 'abcdefghijklmnopqrstuvwxyz'.split( '' ); // returns as array of letters

    this.recipeSvc.recipes$.subscribe( ( r: any ) => {
      console.log( { r } );

      // Account for no recipes
      if ( r?.length ) {
        this.recipes.next( r );

        // build list
        const results = this.recipes.value.map( ( rx: any ) => {
          // list all first chars
          return rx.title[0]
        } )
        // concat to uniq list with no duplicates
        const uniqueArray = _.uniq( results );
        this.letters = uniqueArray;
        console.log( { results, uniqueArray } );
        console.log( 'letters:', this.letters );
        return;
      }
      // empty
      // alert user no recipes exist
      this.emptyRecipes = true;
    } )
    //

  }

  onIonInfinite( ev: any ) {
    // this.generateItems();
    setTimeout( () => {
      ( ev as InfiniteScrollCustomEvent ).target.complete();
    }, 500 );
  }
}
