import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipantIndexPage } from './participant-index.page';

const routes: Routes = [
  {
    path: '',
    component: ParticipantIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipantIndexPageRoutingModule {}
