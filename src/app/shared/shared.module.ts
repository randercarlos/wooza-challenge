import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LineBreakPipe } from './pipes/line-break.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    TemplateComponent,
    LineBreakPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
    ToastModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    TemplateComponent,
    CommonModule,
    RouterModule,
    HttpClientModule,
    LineBreakPipe,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
    ToastModule,
    NgxMaskModule
  ]
})
export class SharedModule { }
