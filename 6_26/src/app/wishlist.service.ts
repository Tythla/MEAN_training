import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private wishlistSubject = new BehaviorSubject<any[]>([]);
  wishlist$ = this.wishlistSubject.asObservable();

  addToWishlist(book: any) {
    const currentWishlist = this.wishlistSubject.value;
    if (!currentWishlist.find((b) => b.id === book.id)) {
      this.wishlistSubject.next([...currentWishlist, book]);
    }
  }

  removeFromWishlist(bookId: string) {
    const currentWishlist = this.wishlistSubject.value;
    this.wishlistSubject.next(currentWishlist.filter((b) => b.id !== bookId));
  }
}
