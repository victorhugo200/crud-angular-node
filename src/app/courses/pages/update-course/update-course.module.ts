import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateCourseComponent } from './update-course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UpdateCourseComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AppMaterialModule
  ]
})
export class UpdateCourseModule { }
