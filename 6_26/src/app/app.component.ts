import { Component } from '@angular/core';
import { SearchBooksComponent } from './search-books/search-books.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchBooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '6_26';
}
