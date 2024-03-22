import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArSceneComponent } from './ar-scene.component';



@NgModule({
  declarations: [ArSceneComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
// If you plan to use this module in other modules
})
export class ArSceneModule { }
