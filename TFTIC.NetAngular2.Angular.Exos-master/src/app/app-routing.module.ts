import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'demo', loadChildren:()=>import('./demo/demo.module').then(m => m.DemoModule)},
  {path:'exos', loadChildren:()=>import('./exercice/exercice.module').then(m => m.ExerciceModule)},
  {path:'not-found', component:NotFoundComponent},
  {path:'**', redirectTo:'not-found', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
