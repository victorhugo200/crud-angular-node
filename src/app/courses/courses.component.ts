import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from './models/courses';
import { CoursesService } from './services/courses.service';
import { catchError, debounceTime, delay, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent, ErrorResponse } from '../shared/components/error-dialog/error-dialog.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses!: MatTableDataSource<Course>;
  
  displayedColumns = ['id', 'name', 'category', 'actions'];
  loading = true;
  search = new FormControl('');

  categorys = ['Front-end', 'Back-end', 'Android', 'Banco de dados', 'Devops'];
  formAdd!: FormGroup;

  specForm = {
    
    name: {
      control: 'name',
      label: 'Nome do Curso',
    },
    categorys: {
      control: 'category',
      label: 'Categoria',
      value: ['Front-end', 'Back-end', 'Android', 'Banco de dados', 'Devops']
    },
    description: {
      control: 'description',
      label: 'Descrição do curso',
      icon: 'description'
    }
  }
  alert = {
    type: '',
    show: false,
    message: '',
    icon: ''
  };


  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog,
    private fb: FormBuilder
    ) { 
   
  }

  ngOnInit(): void {
    this.formAdd = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(25)]]
    });
    this.coursesService.list().subscribe(
      (list) =>  {
        this.courses = new MatTableDataSource(list);
        this.loading = false;
      })
  
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
        this.loading = true;
        this.listCourses();
       }
    )
  }
  
  filter(){
    this.search.valueChanges
      .pipe(debounceTime(300))
      .subscribe((valor) => {
        this.courses.filter = valor.trim().toLowerCase();
      });
  }

  addCourse() {
    const formValue = this.formAdd.getRawValue();
    if (this.formAdd.valid) {
      this.coursesService.addCourse(formValue)
      .pipe(tap(() => {
        this.loading = true;
        this.listCourses();
      }))
      .subscribe(
        () => {
          
          const message = 'Curso adicionado com sucesso!';
          this.setConfigAlert('success', true, message, 'check_circle' );
          this.closeAlert();
          this.formAdd.reset();
          
      },
      (error) => {
        const { message } = error['error'];
        this.setConfigAlert('error', true, message, 'close' );
        this.closeAlert();
        this.formAdd.reset();
      }
      ); 
    }
  }

  private listCourses() {
    this.coursesService.list().subscribe(
      (list) => {
       if (list){
         this.courses.data = list
         this.loading = false;
       }
     }
    );
  }

  closeAlert() {
    setTimeout(() => this.alert.show = false, 5000);
  }
  setConfigAlert(type: string, show: boolean, message: string, icon: string){
    this.alert.type = type;
    this.alert.show = show;
    this.alert.message = message;
    this.alert.icon = icon;
  }

}
