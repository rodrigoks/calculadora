import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora.component';

@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  exports: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CalculadoraModule { }
