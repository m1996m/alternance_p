import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AgnedaCreatePage } from './agneda-create.page';

const routes: Routes = [
  {
    path: '',
    component: AgnedaCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule],
})
export class AgnedaCreatePageRoutingModule {}
