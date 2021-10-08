import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipantEditPageRoutingModule } from './participant-edit-routing.module';

import { ParticipantEditPage } from './participant-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipantEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ParticipantEditPage]
})
export class ParticipantEditPageModule {}
