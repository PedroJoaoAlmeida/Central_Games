import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JogoVelhaPageRoutingModule } from './jogo-velha-routing.module';

import { JogoVelhaPage } from './jogo-velha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JogoVelhaPageRoutingModule
  ],
  declarations: [JogoVelhaPage]
})
export class JogoVelhaPageModule {}
