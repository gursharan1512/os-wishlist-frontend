import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishlistOffersComponent }      from './component/wishlist-offers/wishlist-offers.component';

const routes: Routes = [
  { path: '', redirectTo: '/wishlist', pathMatch: 'full' },
  { path: 'wishlist', component: WishlistOffersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}