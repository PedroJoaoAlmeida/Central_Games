import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CadastroPage } from './cadastro.page';
import { CadastroPageRoutingModule } from './cadastro-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    IonicModule,
    CadastroPageRoutingModule
  ],
  declarations: [CadastroPage]
})
export class CadastroPageModule {}
