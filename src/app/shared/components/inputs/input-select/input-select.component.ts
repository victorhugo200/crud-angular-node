import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidarCamposService } from 'src/app/shared/validators/validar-campos.service';

@Component({
  selector: 'crud-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() controlName!: string;
  @Input() label!: string;
  @Input() listValue!: string[];
  constructor(public validarCampo: ValidarCamposService) { }

  ngOnInit(): void {
  }

  get formControl(): AbstractControl {
    return this.form.controls[this.controlName];
  }

}
