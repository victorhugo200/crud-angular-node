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
  

  constructor(private http: HttpClient) { }

  /**
   * Método responsável por retornar a lista de cursos
   * @returns lista de cursos
   */
  list(): Observable<Course[]> {
    return  this.http.get<Course[]>(this.API + '/courses').pipe(delay(2000));
  }

  /**
   * Método responsável pot criar um curso
   * @param course 
   * @returns 
   */
  addCourse(course: Course):  Observable<Course[]> {
    return this.http.post<Course[]>(this.API + '/courses/add', { course } );
  }

  
  /**
   * Método responsável por atualizar um curso
   * @param id do curso
   * @param course 
   * @returns retorna a lista atualizada
   */
  updateCourse(id: string, course: Course):  Observable<Course[]> {
    return this.http.put<Course[]>(this.API + '/courses/' + id , { course } ).pipe(delay(2000));
  }
  
  /**
   * Método respinsável por excluir um curso
   * @param id do curso
   * @returns null
   */
  deleteCourse(id: number) {
    return this.http.delete(this.API + '/courses/'+ id);
  }
  
  /**
   * Método responsável trazer o detalhe do curso
   * @param id curso que deseja obter o detalhe
   * @returns  retorna o detalhe do curso
   */
  detailCourse(id: string) {
    return  this.http.get<DetailCourses>(`${this.API}/courses/detail/${id}`);
  }
}
