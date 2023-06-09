import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  imports: [ HttpClientModule, CommonModule ]
})
export class PhotosModule {}
