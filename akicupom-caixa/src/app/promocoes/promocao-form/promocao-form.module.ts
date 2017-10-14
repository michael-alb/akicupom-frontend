import { FormsModule } from '@angular/forms';
import { PromocaoFormComponent } from './promocao-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from '../form-debug/form-debug.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FormDebugComponent
  ]
})
export class PromocaoFormModule { }
