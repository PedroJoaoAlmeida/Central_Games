import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimonSaysPageRoutingModule } from './simon-says-routing.module';

import { SimonSaysPage } from './simon-says.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimonSaysPageRoutingModule
  ],
  declarations: [SimonSaysPage]
})
export class SimonSaysPageModule {}
