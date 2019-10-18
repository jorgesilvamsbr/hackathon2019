import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdicionarGatilhoPage } from './adicionar-gatilho.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarGatilhoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdicionarGatilhoPage]
})
export class AdicionarGatilhoPageModule {}
