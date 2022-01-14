import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ComponentsModule } from './components/components.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { PipesModule } from './pipes/pipes.module';




@NgModule({
  declarations: [
  ErrorDialogComponent
],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent, 
    PipesModule,
    ComponentsModule
  
  ]
})
export class SharedModule { }
