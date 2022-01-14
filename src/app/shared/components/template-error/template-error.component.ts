import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'crud-template-error',
  templateUrl: './template-error.component.html',
  styleUrls: ['./template-error.component.scss']
})
export class TemplateErrorComponent implements OnInit {
  @Input() title = '';
  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
