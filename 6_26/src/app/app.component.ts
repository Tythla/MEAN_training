import { Component, OnInit } from '@angular/core';
import { SearchBooksComponent } from './search-books/search-books.component';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SearchBooksComponent,
    RouterModule,
    NavbarComponent,
    WishlistComponent,
    CommonModule,
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.router.url);
  }

  showSideWishlist(): boolean {
    console.log('Current URL:', this.router.url);
    return this.router.url === '/';
  }
}
