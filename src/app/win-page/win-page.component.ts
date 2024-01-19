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

  /**
   * Creates an instance of the WinComponent with the JSConfetti animation.
   * @param router - The router service used for navigation.
   */
  constructor(private router: Router) { 
    this.confetti.addConfetti();
  }

  /**
   * Executes the confetti animation after a delay of 700 milliseconds.
   */
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
