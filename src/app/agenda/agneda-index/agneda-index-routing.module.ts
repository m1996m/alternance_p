import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgnedaIndexPage } from './agneda-index.page';

const routes: Routes = [
  {
    path: '',
    component: AgnedaIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgnedaIndexPageRoutingModule {}
