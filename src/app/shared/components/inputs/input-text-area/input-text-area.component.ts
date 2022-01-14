import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidarCamposService } from 'src/app/shared/validators/validar-campos.service';

@Component({
  selector: 'crud-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.scss']
})
export class InputTextAreaComponent implements OnInit {

  @Input() form!: FormGroup;
  @Input() controlName!: string;
  @Input() label!: string;
  constructor(public validarCampo: ValidarCamposService) { }

  ngOnInit(): void {
  }

  get formControl(): AbstractControl {
    return this.form.controls[this.controlName];
  }

}
