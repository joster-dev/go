import { Cell } from "./cell.class";

export class Game {
  grid: Cell[] = [];
  isBlackTurn = true;

  constructor(public size: number) {
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        this.grid.push(new Cell(x, y));
      }
    }
  }

  claim(x: number, y: number): void {
    const item = this.grid.find(item => item.x === x && item.y === y);
    if (!item || item.occupant !== null) {
      throw new Error('invalid claim');
    }
    item.occupant = this.isBlackTurn ? 'black' : 'white';
    // this.removeDead
    this.isBlackTurn = !this.isBlackTurn;
  }

  private adjacent(x: number, y: number): Cell[] {
    return this.grid.filter(cell => cell.x === x - 1 && cell.y === y
      || cell.x === x + 1 && cell.y === y
      || cell.x === x && cell.y === y - 1
      || cell.x === x && cell.y === y + 1);
  }

  private getGroup(type: string | null): Cell[][] {
    return this.grid.reduce((acc, cur) => {
      if (acc.some(group => group.some(item => item.occupant === type))) {
        return acc;
      }
      return acc.concat();
    }, [] as Cell[][]);
  }
}
