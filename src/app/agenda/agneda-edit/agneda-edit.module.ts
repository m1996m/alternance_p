import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgnedaEditPageRoutingModule } from './agneda-edit-routing.module';

import { AgnedaEditPage } from './agneda-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgnedaEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AgnedaEditPage]
})
export class AgnedaEditPageModule {}
