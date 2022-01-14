import { NgModule } from "@angular/core";
import { CategoryPipe } from "./category/category.pipe";

@NgModule({
    declarations: [CategoryPipe],
    exports: [CategoryPipe]
})
export class PipesModule {}