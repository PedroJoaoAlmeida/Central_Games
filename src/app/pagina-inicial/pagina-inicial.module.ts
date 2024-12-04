import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaginaInicialPageRoutingModule } from './pagina-inicial-routing.module';
import { PaginaInicialPage } from './pagina-inicial.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaInicialPageRoutingModule
  ],
  declarations: [PaginaInicialPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Adicione isso aqui se precisar
})
export class PaginaInicialPageModule {}
