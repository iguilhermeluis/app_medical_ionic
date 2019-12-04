import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PamPage } from './pam';

@NgModule({
  declarations: [
    PamPage,
  ],
  imports: [
    IonicPageModule.forChild(PamPage),
  ],
})
export class PamPageModule {}
