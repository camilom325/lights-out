import { Component } from '@angular/core';
import { Router } from '@angular/router';
import JSConfetti from 'js-confetti';

@Component({
  selector: 'app-win-page',
  templateUrl: './win-page.component.html',
  styleUrls: ['./win-page.component.css']
})
export class WinComponent {

  confetti = new JSConfetti();
  goHome = false;

  constructor(private router: Router) { 
    this.confetti.addConfetti();
  }

  onHoverConfetti() {
    setTimeout(() => {
      this.confetti.addConfetti();
    }, 700); 
  }

  navigate() {
    this.goHome = true;
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);
  }

}
