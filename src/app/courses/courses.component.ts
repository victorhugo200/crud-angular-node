import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from './models/courses';
import { CoursesService } from './services/courses.service';
import { catchError, delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent, ErrorResponse } from '../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // courses: MatTableDataSource<any> = new MatTableDataSource();
  courses$: Observable<Course[]>;
  displayedColumns = ['id', 'name', 'category', 'actions'];

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog
    ) { 
    this.courses$ = this.coursesService.list()
      .pipe(catchError(error => {
        console.log(error.status)
        const paramError = { text: 'Error ao carregar os cursos', status: error.status};
        this.onError(paramError);
       return of([])
    }))
  }

  ngOnInit(): void {
  
  }

  onError(errorMsg: ErrorResponse) {
    this.dialog.open(ErrorDialogComponent, {
      data: {
        text: errorMsg.text,
        status: errorMsg.status
      }
    });
  }



  deleteCourse(id: number) {
    this.coursesService.deleteCourse(id)
    .subscribe(
      () => {
        this.courses$ = this.coursesService.list();
       }
    )
  }
  updateCourse(id: string) {
    const payload =  { _id: id, name: 'Ionic', category: 'front-end'};
    this.courses$ =  this.coursesService.updateCourse(id, payload);
    
  }
  // filter(event: KeyboardEvent){
  //   console.log(this.courses.filteredData.length)
  //   const valor =( event.target as HTMLInputElement).value;
  //   this.courses.filter = valor.trim().toLowerCase();
  // }

}
