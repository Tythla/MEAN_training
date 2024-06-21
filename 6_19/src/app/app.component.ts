import { Component } from '@angular/core';
import { HeadComponent } from './head/head.component';
import { GridComponent } from './grid/grid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeadComponent, GridComponent]
})
export class AppComponent {
  selectedColor: string = 'black';

  onColorChange(color: string) {
    this.selectedColor = color;
  }
}
