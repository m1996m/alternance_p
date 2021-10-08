import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipantShowPageRoutingModule } from './participant-show-routing.module';

import { ParticipantShowPage } from './participant-show.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipantShowPageRoutingModule
  ],
  declarations: [ParticipantShowPage]
})
export class ParticipantShowPageModule {}
