import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaShowPageRoutingModule } from './agenda-show-routing.module';

import { AgendaShowPage } from './agenda-show.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaShowPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AgendaShowPage]
})
export class AgendaShowPageModule {}
