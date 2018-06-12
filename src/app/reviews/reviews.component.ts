import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  reviews$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getReviews().subscribe(
      data => this.reviews$ = data
    )
  }

}
