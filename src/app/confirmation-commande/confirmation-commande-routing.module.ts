import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmationCommandePage } from './confirmation-commande.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationCommandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmationCommandePageRoutingModule {}
