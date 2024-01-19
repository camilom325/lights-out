import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainGameModule } from './main-game/main-game.module';
import { StartPageModule } from './start-page/start-page.module';
import { FormsModule } from '@angular/forms';
import { WinPageModule } from './win-page/win-page.module';

@NgModule({
  declarations: [	
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainGameModule,
    StartPageModule,
    FormsModule,
    WinPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
