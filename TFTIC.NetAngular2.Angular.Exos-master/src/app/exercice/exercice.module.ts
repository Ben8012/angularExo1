import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { MainExerciceComponent } from '../exercice/components/main-exercice/main-exercice.component';
import { SharedModule } from '../shared/shared.module';
import { ExosChronoComponent } from '../exercice/components/exos-chrono/exos-chrono.component';
import { ShoppingMainComponent } from '../exercice/components/shopping-main/shopping-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListComponent } from '../exercice/components/shopping-list/shopping-list.component';
import { ShoppingMain2Component } from '../exercice/components/shopping-main2/shopping-main2.component';
import { ShoppingList2Component } from '../exercice/components/shopping-list2/shopping-list2.component';
import { ExoFormulaireComponent } from '../exercice/components/exo-formulaire/exo-formulaire.component';
import { FoodComponent } from './components/formulair/food/food.component';
import { TripComponent } from './components/formulair/trip/trip.component';
import { PartyComponent } from './components/formulair/party/party.component';
import { MovieComponent } from './components/formulair/movie/movie.component';


@NgModule({
  declarations: [
    MainExerciceComponent,
    ExosChronoComponent,
    ShoppingMainComponent,
    ShoppingListComponent,
    ShoppingMain2Component,
    ShoppingList2Component,
    ExoFormulaireComponent,
    FoodComponent,
    TripComponent,
    PartyComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  bootstrap:[
    MainExerciceComponent
  ]
})
export class ExerciceModule { }
