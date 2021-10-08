import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgnedaCreatePageRoutingModule } from './agneda-create-routing.module';

import { AgnedaCreatePage } from './agneda-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgnedaCreatePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AgnedaCreatePage]
})
export class AgnedaCreatePageModule {}
