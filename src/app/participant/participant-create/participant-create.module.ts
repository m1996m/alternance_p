import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipantCreatePageRoutingModule } from './participant-create-routing.module';

import { ParticipantCreatePage } from './participant-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipantCreatePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ParticipantCreatePage]
})
export class ParticipantCreatePageModule {}
