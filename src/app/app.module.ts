import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WishlistOffersComponent } from './component/wishlist-offers/wishlist-offers.component';
import { WishlistOfferComponent } from './component/wishlist-offers/wishlist-offer/wishlist-offer.component';
import { WishlistService } from './services/wishlist.service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    WishlistOffersComponent,
    WishlistOfferComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WishlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
