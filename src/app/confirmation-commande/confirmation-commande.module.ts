import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationCommandePageRoutingModule } from './confirmation-commande-routing.module';

import { ConfirmationCommandePage } from './confirmation-commande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmationCommandePageRoutingModule
  ],
  declarations: [ConfirmationCommandePage]
})
export class ConfirmationCommandePageModule {}
