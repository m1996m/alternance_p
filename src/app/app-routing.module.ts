import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'participant-index',
    loadChildren: () => import('./participant/participant-index/participant-index.module').then( m => m.ParticipantIndexPageModule)
  },
  {
    path: 'participant-create',
    loadChildren: () => import('./participant/participant-create/participant-create.module').then( m => m.ParticipantCreatePageModule)
  },
  {
    path: 'participant-edit/:id',
    loadChildren: () => import('./participant/participant-edit/participant-edit.module').then( m => m.ParticipantEditPageModule)
  },
  {
    path: 'participant-show',
    loadChildren: () => import('./participant/participant-show/participant-show.module').then( m => m.ParticipantShowPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'agneda-edit/:id',
    loadChildren: () => import('./agenda/agneda-edit/agneda-edit.module').then( m => m.AgnedaEditPageModule)
  },
  {
    path: 'agneda-create',
    loadChildren: () => import('./agenda/agneda-create/agneda-create.module').then( m => m.AgnedaCreatePageModule)
  },
  {
    path: 'agneda-index',
    loadChildren: () => import('./agenda/agneda-index/agneda-index.module').then( m => m.AgnedaIndexPageModule)
  },
  {
    path: 'agenda-show',
    loadChildren: () => import('./agenda/agenda-show/agenda-show.module').then( m => m.AgendaShowPageModule)
  },

]; 

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
