import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WishlistOffersComponent } from './component/wishlist-offers/wishlist-offers.component';
import { WishlistService } from './services/wishlist.service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { WishlistHeaderComponent } from './component/shared/wishlist-header/wishlist-header.component';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WishlistOffersComponent,
    WishlistHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [WishlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
