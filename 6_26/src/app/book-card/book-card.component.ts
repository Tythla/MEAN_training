import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class BookCardComponent {
  @Input() book: any;

  constructor(private wishlistService: WishlistService) {}

  addToWishlist() {
    this.wishlistService.addToWishlist(this.book);
  }
}
