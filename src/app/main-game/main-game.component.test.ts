import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainGameComponent } from './main-game.component';

describe('MainGameComponent', () => {
  let component: MainGameComponent;
  let fixture: ComponentFixture<MainGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainGameComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should generate a random board', () => {
    component.gridSize = 5;
    component.generateRandomBoard();
    expect(component.board.length).toBe(5);
    expect(component.board[0].length).toBe(5);
  });

  it('should toggle lights based on random values', () => {
    component.gridSize = 5;
    component.generateRandomBoard();
    let lightsOnCount = 0;
    for (let i = 0; i < component.gridSize; i++) {
      for (let j = 0; j < component.gridSize; j++) {
        if (component.board[i][j]) {
          lightsOnCount++;
        }
      }
    }
    expect(lightsOnCount).toBeGreaterThan(0);
    expect(lightsOnCount).toBeLessThanOrEqual(component.gridSize * component.gridSize);
  });

  it('should reset the movements count', () => {
    component.movements = 10;
    component.generateRandomBoard();
    expect(component.movements).toBe(0);
  });
  it('should toggle lights and update movements count', () => {
    component.gridSize = 5;
    component.board = [
      [true, false, true, false, true],
      [false, true, false, true, false],
      [true, false, true, false, true],
      [false, true, false, true, false],
      [true, false, true, false, true]
    ];
    component.movements = 0;
    component.toggleLights(2, 2);
    expect(component.board).toEqual([
      [true, false, true, false, true],
      [false, true, false, true, false],
      [true, true, true, true, true],
      [false, true, false, true, false],
      [true, false, true, false, true]
    ]);
    expect(component.movements).toBe(1);
  });
  
  it('should toggle lights and update movements count when initial is true', () => {
    component.gridSize = 5;
    component.board = [
      [true, false, true, false, true],
      [false, true, false, true, false],
      [true, false, true, false, true],
      [false, true, false, true, false],
      [true, false, true, false, true]
    ];
    component.movements = 0;
    component.toggleLights(2, 2, true);
    expect(component.board).toEqual([
      [false, false, false, false, false],
      [false, true, false, true, false],
      [false, false, false, false, false],
      [false, true, false, true, false],
      [false, false, false, false, false]
    ]);
    expect(component.movements).toBe(0);
  });
  
  it('should toggle lights and update movements count when row is at the top edge', () => {
    component.gridSize = 5;
    component.board = [
      [true, false, true, false, true],
      [false, true, false, true, false],
      [true, false, true, false, true],
      [false, true, false, true, false],
      [true, false, true, false, true]
    ];
    component.movements = 0;
    component.toggleLights(0, 2);
    expect(component.board).toEqual([
      [true, false, true, false, true],
      [false, true, false, true, false],
      [false, false, false, false, false],
      [false, true, false, true, false],
      [true, false, true, false, true]
    ]);
    expect(component.movements).toBe(1);
  });
  
  it('should toggle lights and update movements count when row is at the bottom edge', () => {
    component.gridSize = 5;
    component.board = [
      [true, false, true, false, true],
      [false, true, false, true, false],
      [true, false, true, false, true],
      [false, true, false, true, false],
      [true, false, true, false, true]
    ];
    component.movements = 0;
    component.toggleLights(4, 2);
    expect(component.board).toEqual([
      [true, false, true, false, true],
      [false, true, false, true, false],
      [true, false, true, false, true],
      [false, true, false, true, false],
      [true, false, true, false, true]
    ]);
    expect(component.movements).toBe(1);
  });
  
  it('should toggle lights and update movements count when column is at the left edge', () => {
    component.gridSize = 5;
    component.board = [
      [true, false, true, false, true],
      [false, true, false, true, false],
      [true, false, true, false, true],
      [false, true, false, true, false],
      [true, false, true, false, true]
    ];
    component.movements = 0;
    component.toggleLights(2, 0);
    expect(component.board).toEqual([
      [true, false, true, false, true],
      [true, true, false, true, false],
      [true, false, true, false, true],
      [false, true, false, true, false],
      [true, false, true, false, true]
    ]);
    expect(component.movements).toBe(1);
  });
  
  it('should toggle lights and update movements count when column is at the right edge', () => {
    component.gridSize = 5;
    component.board = [
      [true, false, true, false, true],
      [false, true, false, true, false],
      [true, false, true, false, true],
      [false, true, false, true, false],
      [true, false, true, false, true]
    ];
    component.movements = 0;
    component.toggleLights(2, 4);
    expect(component.board).toEqual([
      [true, false, true, false, true],
      [false, true, false, true, false],
      [true, false, true, false, false],
      [false, true, false, true, false],
      [true, false, true, false, true]
    ]);
    expect(component.movements).toBe(1);
  });
  
  it('should toggle lights and update movements count when the board is complete', () => {
    component.gridSize = 5;
    component.board = [
      [true, true, true, true, true],
      [true, true, true, true, true],
      [true, true, true, true, true],
      [true, true, true, true, true],
      [true, true, true, true, true]
    ];
    component.movements = 0;
    component.toggleLights(2, 2);
    expect(component.board).toEqual([
      [true, true, true, true, true],
      [true, true, true, true, true],
      [true, true, false, true, true],
      [true, true, true, true, true],
      [true, true, true, true, true]
    ]);
    expect(component.movements).toBe(1);
    expect(component.hideBoard).toBe(true);
    setTimeout(() => {
      expect(component.gameWon).toBe(true);
    }, 2000);
  });
  
  it('should return true for an empty board', () => {
    const matrix: boolean[][] = [];
    const result = component.checkCompleteBoard(matrix);
    expect(result).toBe(true);
  });
  
  it('should return false for a board with at least one light on', () => {
    const matrix: boolean[][] = [
      [false, false, false],
      [false, true, false],
      [false, false, false]
    ];
    const result = component.checkCompleteBoard(matrix);
    expect(result).toBe(false);
  });
  
  it('should return true for a completely turned off board', () => {
    const matrix: boolean[][] = [
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ];
    const result = component.checkCompleteBoard(matrix);
    expect(result).toBe(true);
  });
  
  it('should regenerate the board', () => {
    component.regenerate();
    expect(component.generateRandomBoard).toHaveBeenCalled();
    expect(component.gameWon).toBe(false);
    expect(component.hideBoard).toBe(false);
    expect(component.i).toBeUndefined();
    expect(component.j).toBeUndefined();
  });
  
  it('should undo the last move', () => {
    component.gridSize = 5;
    component.generateRandomBoard();
    component.i = 2;
    component.j = 3;
    component.canUndo = true;
    component.undo();
    expect(component.board[2][3]).toBe(false);
    expect(component.movements).toBe(8);
    expect(component.i).toBeUndefined();
    expect(component.j).toBeUndefined();
    expect(component.canUndo).toBe(false);
  });
  
  it('should not undo if i or j are not numbers', () => {
    component.gridSize = 5;
    component.generateRandomBoard();
    component.i = undefined;
    component.j = 3;
    component.canUndo = true;
    component.undo();
    expect(component.board[2][3]).toBe(true);
    expect(component.movements).toBe(10);
    expect(component.i).toBeUndefined();
    expect(component.j).toBe(3);
    expect(component.canUndo).toBe(true);
  });
  
  it('should not undo if canUndo is false', () => {
    component.gridSize = 5;
    component.generateRandomBoard();
    component.i = 2;
    component.j = 3;
    component.canUndo = false;
    component.undo();
    expect(component.board[2][3]).toBe(true);
    expect(component.movements).toBe(10);
    expect(component.i).toBe(2);
    expect(component.j).toBe(3);
    expect(component.canUndo).toBe(false);
  });

});