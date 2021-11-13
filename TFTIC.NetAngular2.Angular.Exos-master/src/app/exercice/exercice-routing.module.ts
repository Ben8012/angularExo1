import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoFormulaireComponent } from '../exercice/components/exo-formulaire/exo-formulaire.component';
import { ExosChronoComponent } from './components/exos-chrono/exos-chrono.component';
import { MainExerciceComponent } from './components/main-exercice/main-exercice.component';
import { ShoppingMainComponent } from './components/shopping-main/shopping-main.component';
import { ShoppingMain2Component } from './components/shopping-main2/shopping-main2.component';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch:'full'},
  {path:'main', component : MainExerciceComponent},
  {path:'exo_01', component : ExosChronoComponent},
  {path:'exo_02', component : ShoppingMainComponent},
  {path:'exo_03', component : ShoppingMain2Component},
  {path:'exo_04', component : ExoFormulaireComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
