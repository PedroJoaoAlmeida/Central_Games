import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JogoVelhaPage } from './jogo-velha.page';

const routes: Routes = [
  {
    path: '',
    component: JogoVelhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogoVelhaPageRoutingModule {}
