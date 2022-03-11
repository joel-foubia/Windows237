import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children:[
      {
        path: 'front',
        loadChildren: () => import('./../front/front.module').then( m => m.FrontPageModule)
      },
      {
        path: 'service',
        loadChildren: () => import('./../service/service.module').then( m => m.ServicePageModule)
      },
      {
        path: 'recherche',
        loadChildren: () => import('./../recherche/recherche.module').then( m => m.RecherchePageModule)
      },
      {
        path: 'mon-compte',
        loadChildren: () => import('./../mon-compte/mon-compte.module').then( m => m.MonComptePageModule)
      },
      {
        path: 'demande-service',
        loadChildren: () => import('./../demande-service/demande-service.module').then( m => m.DemandeServicePageModule)
      },
      {
        path: '',
        redirectTo: 'tab/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'aide',
    loadChildren: () => import('./aide/aide.module').then( m => m.AidePageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
