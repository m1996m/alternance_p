import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AgnedaEditPage } from './agneda-edit.page';

const routes: Routes = [
  {
    path: '',
    component: AgnedaEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule],
})
export class AgnedaEditPageRoutingModule {}
