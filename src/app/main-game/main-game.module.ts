import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGameComponent } from './main-game.component';
import { RouterModule } from '@angular/router';
import { WinPageModule } from '../win-page/win-page.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    WinPageModule
  ],
  declarations: [MainGameComponent],
  exports: [MainGameComponent]
})
export class MainGameModule { }
