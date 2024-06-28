import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { SearchBooksComponent } from './app/search-books/search-books.component';
import { WishlistComponent } from './app/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component: SearchBooksComponent },
  { path: 'wishlist', component: WishlistComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
