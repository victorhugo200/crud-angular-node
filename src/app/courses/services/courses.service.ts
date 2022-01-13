import { Injectable } from '@angular/core';
import { Course } from '../models/courses';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DetailCourses } from '../models/detail-couses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly API = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  list(): Observable<Course[]> {
    return  this.http.get<Course[]>(this.API + '/courses').pipe(delay(2000));
  }


  updateCourse(id: string, course: Course):  Observable<Course[]> {
    return this.http.put<Course[]>(this.API + '/courses/' + id , { course } ).pipe(delay(2000));
  }
  
  deleteCourse(id: number) {
    return this.http.delete(this.API + '/courses/'+ id);
  }

  detailCourse(id: string) {
    return  this.http.get<DetailCourses>(`${this.API}/courses/${id}`).pipe(delay(2000));
  }
}
