import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from '../shared/app-material/app-material.module';


import { SharedModule } from '../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { DetailCourseModule } from './pages/detail-course/detail-course.module';
import { UpdateCourseModule } from './pages/update-course/update-course.module';


@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule, 
    AppMaterialModule,
    CoursesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    DetailCourseModule,
    UpdateCourseModule

  ],
})
export class CoursesModule {}
