import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  private selection: string = 'easy';

  getSelection(): string {
    return this.selection;
  }

  setSelection(newSelection: string): void {
    this.selection = newSelection;
  }

}
