import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailCourses } from '../../models/detail-couses';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.scss']
})
export class UpdateCourseComponent implements OnInit {
  form!: FormGroup;
  data!: DetailCourses;
  constructor(
    private fb: FormBuilder, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.data = this.activatedRoute.snapshot.data['data'];
  
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    })
    this.setValueControl('name', this.data.title);
    this.setValueControl('category', this.data.category);
    this.setValueControl('description', this.data.description);

  }

  submit() {
  
    if (this.form.valid) {
        const formValue = this.form.getRawValue();
        const payload = { _id: this.data._id, ...formValue };
        this.coursesService.updateCourse(payload._id, payload)
          .subscribe(() =>  this.router.navigate(['']))
     }
    
  }

  setValueControl(control: string, value: string) {
    this.form.get(control)?.setValue(value);
  }

}
