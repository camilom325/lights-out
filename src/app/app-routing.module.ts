import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { MainGameComponent } from './main-game/main-game.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'game', component: MainGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
