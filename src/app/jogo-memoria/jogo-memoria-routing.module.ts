import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JogoMemoriaPage } from './jogo-memoria.page';

const routes: Routes = [
  {
    path: '',
    component: JogoMemoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogoMemoriaPageRoutingModule {}
