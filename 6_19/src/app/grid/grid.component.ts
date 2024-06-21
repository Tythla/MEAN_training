import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  standalone: true,
  providers: [DataService],
  imports: [CommonModule]
})
export class GridComponent {
  data: { title: string; content: string; color: string; }[] = [];
  selectedColor = '';
  selectedIndex: number | null = null;

  @Output() colorChange = new EventEmitter<string>();

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }

  changeColor(color: string, index: number) {
    this.selectedColor = color;
    this.selectedIndex = index;
    this.colorChange.emit(color);
  }

  getBoxShadow(index: number) {
    return this.selectedIndex === index ? `0 4px 8px ${this.selectedColor}` : '';
  }
}
