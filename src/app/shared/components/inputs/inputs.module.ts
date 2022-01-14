import { NgModule } from "@angular/core";
import { InputSelectModule } from "./input-select/input-select.module";
import { InputTextAreaModule } from "./input-text-area/input-text-area.module";
import { InputTextModule } from "./input-text/input-text.module";

@NgModule({
    exports: [
        InputSelectModule,
        InputTextModule,
        InputTextAreaModule
    ]
})
export class  InputsModule {} 
