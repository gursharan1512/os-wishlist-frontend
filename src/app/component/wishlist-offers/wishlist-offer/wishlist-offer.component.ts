import { Component, OnInit, Input } from '@angular/core';
import { WishlistService } from '../../../services/wishlist.service';

@Component({
  selector: 'app-wishlist-offer',
  templateUrl: './wishlist-offer.component.html',
  styleUrls: ['./wishlist-offer.component.css'],
  providers:[WishlistService]
})
export class WishlistOfferComponent implements OnInit {

  @Input() offerList: any;
  constructor(private wishlistService: WishlistService) { }

  ngOnInit() {
  }

  deleteOffer(offerId,userId){
    this.wishlistService.deleteRestaurant(offerId,userId).subscribe((res) =>{
    	window.location.reload();
      }, (error) =>{
        alert(error + "deleting restaurant does not works");
      })
  }

}
