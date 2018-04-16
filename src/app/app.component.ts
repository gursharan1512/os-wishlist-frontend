import { Component } from '@angular/core';
import { WishlistService } from '../app/services/wishlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[WishlistService]
})
export class AppComponent {
  
  constructor(private wishlistService: WishlistService) { }

  ngOnInit() {
  	this.searchRestaurants();
  }

  public wishlistOffers=[];

  searchRestaurants() {
    this.wishlistService.getWishlist().subscribe((res) =>{
      this.wishlistOffers = res;
      }, (error) =>{
      })
    }
}