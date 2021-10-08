import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ParticipantCreatePage } from './participant-create.page';

const routes: Routes = [
  {
    path: '',
    component: ParticipantCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule],
})
export class ParticipantCreatePageRoutingModule {}
