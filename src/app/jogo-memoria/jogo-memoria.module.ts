import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JogoMemoriaPageRoutingModule } from './jogo-memoria-routing.module';

import { JogoMemoriaPage } from './jogo-memoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JogoMemoriaPageRoutingModule
  ],
  declarations: [JogoMemoriaPage]
})
export class JogoMemoriaPageModule {}
