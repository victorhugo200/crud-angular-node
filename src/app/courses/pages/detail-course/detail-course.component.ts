import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs/operators';
import { DetailCourses } from '../../models/detail-couses';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss']
})
export class DetailCourseComponent implements OnInit {
  detail!: DetailCourses;
  loading = true;
  hasError = false;
  text!: string;
  feedbackError = {
    title: '',
    text: ''

  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private courserService: CoursesService
    ) {
    
   }

  ngOnInit(): void {
  
    // this.detail = this.activatedRoute.snapshot.data['data'];

    this.courserService.detailCourse(this.activatedRoute.snapshot.params.id)
    .pipe(delay(2000))
    .subscribe(
      (detail) => {
          this.loading = false;
          this.detail = detail;
        },
        (error: HttpErrorResponse) => {
          this.loading = false;
          this.hasError = true;
          const { status } = error;
          if (status === 404) {
            this.feedbackError.title = `Error ${status} !`
            this.feedbackError.text = 'Serviço não encontrado.';
          }
         
          
        }
      )
    
    
  }

}
