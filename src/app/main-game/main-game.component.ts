import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../start-page/shared-service.service';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.css']
})
export class MainGameComponent implements OnInit {
  
  selection!: string;
  movements!: number;
  clickedCell: string | null = null;
  gridSize = 4;
  board: boolean[][] = [];
  gameWon = false;
  hideBoard = false;
  i: number|undefined;
  j: number | undefined;
  canUndo = false;

  constructor(private sharedService: SharedServiceService) {}

  ngOnInit(): void {
    this.selection = this.sharedService.getSelection();

    if (this.selection === 'medium') {
      this.gridSize = 5;
    }
    else if (this.selection === 'hard') {
      this.gridSize = 6;
    }
    this.generateRandomBoard();
    
  }

  generateRandomBoard(): void {
    for (let i = 0; i < this.gridSize; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.gridSize; j++) {
        this.board[i][j] = false
      }
    }
    for (let i = 0; i < this.gridSize; i++) {
      for (let j = 0; j < this.gridSize; j++) {
        if (Math.random() > 0.9) {
          this.toggleLights(i, j, true);
        }
      }
    }
    this.movements = 0;
  }
  
  toggleLights(row: number, col: number, initial?: boolean): void {
    
    this.i = row;
    this.j = col; 
    this.canUndo = typeof this.i === 'number' && typeof this.j === 'number';
    this.clickedCell = row.toString() + '-' + col.toString();
    this.movements++;
    if (row > 0) {
      this.board[row - 1][col] = !this.board[row - 1][col];
    }
    if (row < this.gridSize - 1) {
      this.board[row + 1][col] = !this.board[row + 1][col];
    }
    if (col > 0) {
      this.board[row][col - 1] = !this.board[row][col - 1];
    }
    if (col < this.gridSize - 1) {
      this.board[row][col + 1] = !this.board[row][col + 1];
    }
    
    if (initial) {
      this.board[row][col] = !this.board[row][col];
      this.clickedCell = '0';
      this.i = undefined;
      this.j = undefined; 
      this.canUndo = false;
      return;
    }

    setTimeout(() => {
      this.board[row][col] = !this.board[row][col];
      this.clickedCell = '0';
      if (this.checkCompleteBoard(this.board)) {
        this.hideBoard = true;
          setTimeout(() => {
            this.gameWon = true;
          }, 2000);
      }
    }, 400);
    
}

  checkCompleteBoard (matrix: boolean[][]): boolean {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j]) {
          return false;
        }
      }
    }
    return true;
  }
    
  regenerate() {
    this.generateRandomBoard();
    this.gameWon = false;
    this.hideBoard = false;
    this.i = undefined;
    this.j = undefined;
  }
    
  undo() {
    if ( typeof this.i === 'number' && typeof this.j === 'number') {
      this.toggleLights(this.i, this.j);
      this.movements -= 2;
      this.i = undefined;
      this.j = undefined;
      this.canUndo = false;
    }
  }
  

}
