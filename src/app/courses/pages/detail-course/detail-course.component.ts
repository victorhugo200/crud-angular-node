import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailCourses } from '../../models/detail-couses';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss']
})
export class DetailCourseComponent implements OnInit {
  detail!: DetailCourses;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.detail = this.activatedRoute.snapshot.data['data'];
    console.log(this.detail);
  }

}
