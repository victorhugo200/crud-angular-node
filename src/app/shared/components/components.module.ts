import { NgModule } from "@angular/core";
import { InputsModule } from "./inputs/inputs.module";
import { LoadingModule } from "./loading/loading.module";
import { TemplateErrorModule } from "./template-error/template-error.module";

@NgModule({
    exports: [
        TemplateErrorModule,
        LoadingModule,
        InputsModule
    ]
})
export class ComponentsModule {}