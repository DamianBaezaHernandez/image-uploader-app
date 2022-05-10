import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadingComponent } from './uploading/uploading.component';
import { UploadedComponent } from './uploaded/uploaded.component';
import { UploaderComponent } from './uploader/uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadingComponent,
    UploadedComponent,
    UploaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


