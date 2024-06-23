import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { RatingComponent } from './rating/rating.component';
import { AverageRatingComponent } from './average-rating/average-rating.component';
import { RatingListComponent } from './rating-list/rating-list.component';
import { CommonModule } from '@angular/common';

interface Rating {
  name: string;
  content: string;
  rate: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RatingComponent, AverageRatingComponent, RatingListComponent],
  providers: [DataService]
})
  
export class AppComponent implements OnInit {
  public ratings: Rating[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.ratings = this.dataService.getRatings();
  }
}
