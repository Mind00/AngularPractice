import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { NgIfComponentComponent } from './ng-if-component/ng-if-component.component';
import { OutputComponent } from './output/output.component';
@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, InputComponent, ViewchildComponent, NgIfComponentComponent, OutputComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
