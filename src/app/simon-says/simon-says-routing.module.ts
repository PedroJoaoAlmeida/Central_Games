import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimonSaysPage } from './simon-says.page';

const routes: Routes = [
  {
    path: '',
    component: SimonSaysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimonSaysPageRoutingModule {}
