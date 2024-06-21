import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  standalone: true
})
export class HeadComponent {
  @Input() color: string = 'black';
}
