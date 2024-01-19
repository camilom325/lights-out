import { Component } from '@angular/core';
import { SharedServiceService } from './shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent {

  goToGame = false;

  constructor(private sharedService: SharedServiceService, private router: Router) {}

  isHovered: boolean = false;
  selection: string = 'easy';

  onHover() {
    this.isHovered = true;
  }

  onLeave() {
    this.isHovered = false;
  }

  onSelectionChange() {
    this.goToGame = true;
    setTimeout(() => {
      this.sharedService.setSelection(this.selection);
      this.router.navigate(['/game']);
    }, 1000);
  }

}
