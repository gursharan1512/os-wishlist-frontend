import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistOfferComponent } from './wishlist-offer.component';

describe('WishlistOfferComponent', () => {
  let component: WishlistOfferComponent;
  let fixture: ComponentFixture<WishlistOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
