import { Component, Input } from '@angular/core';
import { RatingService } from '../services/rating.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [NgFor],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
 // The itemId input property to identify the item being rated
 @Input() itemId!: string;
 // The current rating value
 rating = 0;

 // Inject the RatingService
 constructor(private ratingService: RatingService) {}

 // OnInit lifecycle hook to initialize the rating value from the service
 ngOnInit(): void {
   this.rating = this.ratingService.getRating(this.itemId);
 }

 // Method to set the rating when a star is clicked
 setRating(rating: number): void {
   this.rating = rating;
   this.ratingService.setRating(this.itemId, rating);
 }
}
