import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PosologiaPage } from './posologia';

@NgModule({
  declarations: [
    PosologiaPage,
  ],
  imports: [
    IonicPageModule.forChild(PosologiaPage),
  ],
})
export class PosologiaPageModule {}
