import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { DetailCourseComponent } from './pages/detail-course/detail-course.component';
import { DetailCourseResolver } from './pages/detail-course/detail-course.resolver';
import { UpdateCourseComponent } from './pages/update-course/update-course.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent
  },
  {
    path: 'detail/:id',
    component: DetailCourseComponent,
   
  },
  {
    path: 'update-course/:id',
    component: UpdateCourseComponent,
    resolve: {
      data: DetailCourseResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
