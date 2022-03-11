import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeServicePage } from './demande-service.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeServicePageRoutingModule {}
