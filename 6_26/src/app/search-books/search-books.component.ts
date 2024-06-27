import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, BookCardComponent],
})
export class SearchBooksComponent {
  private searchSubject = new Subject<string>();
  books$: Observable<any[]> = this.searchSubject.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((searchTerm) => this.searchBooks(searchTerm))
  );

  constructor(private http: HttpClient) {}

  searchBooks(bookname: string): Observable<any[]> {
    return this.http
      .get<any>(`https://www.googleapis.com/books/v1/volumes?q=${bookname}`)
      .pipe(
        map((response) => {
          console.log(response);
          return response.items || [];
        })
      );
  }

  onSearchChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const searchValue = inputElement.value;
    console.log(searchValue);
    if (searchValue) {
      this.searchSubject.next(searchValue);
    }
  }
}
