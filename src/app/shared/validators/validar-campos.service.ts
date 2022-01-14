import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})

export class ValidarCamposService {

    hasErrorValidator(control: AbstractControl, errorName: string) {
        const hasError = (control.dirty || control.touched) 
                            && this.hasError(control, errorName);
        if (hasError) {
            return true;
        }
        return false;

    }
    hasError(control: AbstractControl, errorName: string) {
        return control.hasError(errorName);
    }
    lengthValidar(control: AbstractControl, errorName: string): number {
         if (control.errors) {
             const error = control.errors[errorName];
            return error.requiredLength || error.min || error.max || 0;
         }
         return 0;
        

    }
}