import { Component } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Game } from './game.class';

@Component({
  selector: 'go-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  game = new Game(5);

  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  onClick(): void {

  }

  createArray(size: number): number[] {
    return [...Array(size).keys()];
  }

  gridAutoSize(size: number): SafeStyle {
    const width = '100vw';
    const height = '100vh';
    const ret = `min(${width} / ${size}, ${height} / ${size})`;
    return this.domSanitizer.bypassSecurityTrustStyle(`max(${ret}, 2em)`);
  }
}
