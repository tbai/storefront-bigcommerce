import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { select, NgRedux } from 'ng2-redux';
import { AppState } from './app.state';
import { fetchProducts, showCartPopup, hideCartPopup } from './app.actions';
import { CartItem } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @select("loading") loading$: Observable<boolean>;
  @select("cartList") cartList$: Observable<CartItem[]>;

  cartLength:number = 0;

  constructor (private store: NgRedux<AppState>) {
    this.cartList$.subscribe(items => {
      let state = this.store.getState();
      this.cartLength = items.reduce( (prev, curr) => (prev + curr.quantity), 0 );
    });
  }

  ngOnInit(){
    this.store.dispatch(fetchProducts());
  }

  toggleCartPopup(event){
    event.preventDefault();
    event.stopPropagation();

    let state = this.store.getState();
    if (state.cartPopupVisible){
      this.hideCartPopup();
    } else {
      this.showCartPopup();
    }
  }

  showCartPopup(){
    this.store.dispatch(showCartPopup());
  }

  hideCartPopup(){
    this.store.dispatch(hideCartPopup());
  }

}
