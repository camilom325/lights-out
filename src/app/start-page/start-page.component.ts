import { Component } from '@angular/core';
import { SharedServiceService } from './shared-service.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent {

  constructor(private sharedService: SharedServiceService) {}

  isHovered: boolean = false;
  selection: string = 'easy';

  onHover() {
    this.isHovered = true;
  }

  onLeave() {
    this.isHovered = false;
  }

  onSelectionChange() {
    this.sharedService.setSelection(this.selection);
  }

}
