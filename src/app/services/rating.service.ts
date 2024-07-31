import { Injectable } from '@angular/core';

// Use the @Injectable decorator to make the service available for dependency injection
@Injectable({
  providedIn: 'root'
})
export class RatingService {
  // A private object to store ratings with itemId as key and rating as value
  private ratings: { [itemId: string]: number } = {};

  constructor() {}

  // Method to set the rating for a specific item
  setRating(itemId: string, rating: number): void {
    this.ratings[itemId] = rating;
  }

  // Method to get the rating of a specific item
  getRating(itemId: string): number {
    return this.ratings[itemId] || 0;
  }
}
