import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ParticipantEditPage } from './participant-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ParticipantEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule],
})
export class ParticipantEditPageRoutingModule {}
