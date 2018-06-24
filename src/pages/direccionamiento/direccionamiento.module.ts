import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DireccionamientoPage } from './direccionamiento';

@NgModule({
  declarations: [
    DireccionamientoPage,
  ],
  imports: [
    IonicPageModule.forChild(DireccionamientoPage),
  ],
})
export class DireccionamientoPageModule {}
