import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class WishlistComponent {
  wishlist$ = this.wishlistService.wishlist$;

  constructor(private wishlistService: WishlistService) {}

  removeFromWishlist(bookId: string) {
    this.wishlistService.removeFromWishlist(bookId);
  }
}
