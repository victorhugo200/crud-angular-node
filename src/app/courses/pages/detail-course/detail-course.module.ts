import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCourseComponent } from './detail-course.component';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/shared/components/components.module';



@NgModule({
  declarations: [DetailCourseComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
    ComponentsModule
  ]
})
export class DetailCourseModule { }
