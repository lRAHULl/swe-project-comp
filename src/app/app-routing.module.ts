import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompoundInterestCalculatorComponent } from './compound-interest-calculator/compound-interest-calculator.component';


const routes: Routes = [
  {
    path: 'ci',
    component: CompoundInterestCalculatorComponent
  },
  // {
  //   path: 'actors',
  //   component: ActorsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
