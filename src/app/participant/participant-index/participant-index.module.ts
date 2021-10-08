import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipantIndexPageRoutingModule } from './participant-index-routing.module';

import { ParticipantIndexPage } from './participant-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipantIndexPageRoutingModule
  ],
  declarations: [ParticipantIndexPage]
})
export class ParticipantIndexPageModule {}
