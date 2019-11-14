import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- import FormsModule.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { HttpService } from './http.service';
import { NewAuthorComponentComponent } from './new-author-component/new-author-component.component';
import { MyHomeComponentComponent } from './my-home-component/my-home-component.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NewAuthorComponentComponent,
    MyHomeComponentComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
