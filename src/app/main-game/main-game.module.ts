import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGameComponent } from './main-game.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MainGameComponent],
  exports: [MainGameComponent]
})
export class MainGameModule { }
