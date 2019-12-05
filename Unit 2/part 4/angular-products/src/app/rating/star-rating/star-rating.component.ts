import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  auxRating: number;
  @Input() rating: number;
  @Output() ratingChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.restoreRating();
  }

  restoreRating() {
    this.auxRating = this.rating;
  }

  setRating(rating: number) {
    this.ratingChanged.emit(rating);
  }

}
