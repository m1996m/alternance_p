import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipantShowPage } from './participant-show.page';

const routes: Routes = [
  {
    path: '',
    component: ParticipantShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipantShowPageRoutingModule {}
