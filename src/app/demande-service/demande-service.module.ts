import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandeServicePageRoutingModule } from './demande-service-routing.module';

import { DemandeServicePage } from './demande-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandeServicePageRoutingModule
  ],
  declarations: [DemandeServicePage]
})
export class DemandeServicePageModule {}
