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
  preHideBoard = false;
  i: number|undefined;
  j: number | undefined;
  canUndo = false;
  showInstructions = false;

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

  /**
   * Generates a random board for the game.
   */
  generateRandomBoard(): void {
    for (let i = 0; i < this.gridSize; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.gridSize; j++) {
        this.board[i][j] = false
      }
    }
    for (let i = 0; i < this.gridSize; i++) {
      for (let j = 0; j < this.gridSize; j++) {
        if (Math.random() > 0.6) {
          this.toggleLights(i, j, true);
        }
      }
    }
    this.movements = 0;
  }
  
  /**
   * Toggles the lights at the specified row and column in the game board.
   * 
   * @param row - The row index of the cell.
   * @param col - The column index of the cell.
   * @param initial - Optional parameter indicating if it's the initial toggle.
   */
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
        this.preHideBoard = true;
        setTimeout(() => {
            this.hideBoard = true;
          }, 1000);
          setTimeout(() => {
            this.gameWon = true;
          }, 3000);
      }
    }, 400);
    
}

  /**
   * Checks if the board is complete, i.e., if all elements in the matrix are false.
   * 
   * @param matrix - The matrix representing the board.
   * @returns True if the board is complete, false otherwise.
   */
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
    
  /**
   * Regenerates the game board with a new random configuration.
   * Resets the game state.
   */
  regenerate() {
    this.generateRandomBoard();
    this.gameWon = false;
    this.hideBoard = false;
    this.i = undefined;
    this.j = undefined;
  }
    
  /**
   * Reverts the previous move by toggling the lights back to their previous state.
   * Decreases the number of movements to the antique number.
   * Resets the selected row and column indices.
   * Disables the ability to undo the move after undoing a move.
   */
  undo() {
    if ( typeof this.i === 'number' && typeof this.j === 'number') {
      this.toggleLights(this.i, this.j);
      this.movements -= 2;
      this.i = undefined;
      this.j = undefined;
      this.canUndo = false;
    }
  }
  
  toggleInstructions() {
    this.showInstructions = !this.showInstructions;
  }

  closeInstructions() {
    this.showInstructions = false;
  }

}
