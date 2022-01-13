import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DetailCourses } from '../../models/detail-couses';
import { CoursesService } from '../../services/courses.service';

@Injectable({
  providedIn: 'root'
})
export class DetailCourseResolver implements Resolve<DetailCourses> {
  constructor(private coursesService: CoursesService){}
  resolve(route: ActivatedRouteSnapshot): Observable<DetailCourses> {
    return this.coursesService.detailCourse(route.params.id);
  }
}
