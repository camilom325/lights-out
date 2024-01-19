import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinComponent } from './win-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WinComponent],
  exports: [WinComponent]
})
export class WinPageModule { }
