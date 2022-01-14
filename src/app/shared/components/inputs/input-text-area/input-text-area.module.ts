import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextAreaComponent } from './input-text-area.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';



@NgModule({
  declarations: [InputTextAreaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  exports: [InputTextAreaComponent]
})
export class InputTextAreaModule { }
