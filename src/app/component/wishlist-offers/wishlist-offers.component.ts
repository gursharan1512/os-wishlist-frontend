import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wishlist-offers',
  templateUrl: './wishlist-offers.component.html',
  styleUrls: ['./wishlist-offers.component.css']
})
export class WishlistOffersComponent implements OnInit {

  @Input() wishlistOffers: any;

  constructor() { }

  ngOnInit() {
  }

}
