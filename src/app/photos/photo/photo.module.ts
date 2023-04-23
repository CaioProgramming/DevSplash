import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo.component";
import { CommonModule } from "@angular/common";


@NgModule({
  imports: [ CommonModule ],
  declarations: [ PhotoComponent ],
  exports: [PhotoComponent]
})

export class PhotoModule {}
