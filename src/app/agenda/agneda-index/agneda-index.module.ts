import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgnedaIndexPageRoutingModule } from './agneda-index-routing.module';

import { AgnedaIndexPage } from './agneda-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgnedaIndexPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AgnedaIndexPage]
})
export class AgnedaIndexPageModule {}
