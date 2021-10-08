import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AgendaShowPage } from './agenda-show.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule],
})
export class AgendaShowPageRoutingModule {}
