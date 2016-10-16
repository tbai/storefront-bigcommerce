import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgRedux, select } from 'ng2-redux';
import { Product } from '../shared';
import { Observable } from 'rxjs';

import { AppState, ProductDictionary } from '../app.state';
import { addToCart } from '../app.actions';


@Component({
  selector: 'product-page',
  styleUrls: ['product-page.component.scss'],
  templateUrl: 'product-page.component.html'
})
export class ProductPageComponent implements OnInit {

  quantity: number = 1;
  productId: string;
  product: Product;
  products: ProductDictionary;
  @select("products") products$: Observable<ProductDictionary>;
  constructor(private store: NgRedux<AppState>, private route: ActivatedRoute) {

  }

  setProduct(){
    if (this.productId && this.products){
      this.product = this.products[this.productId];
    }
  }

  ngOnInit() {
    this.route.params.forEach((params:Params) => {
      let state = this.store.getState();
      this.productId = params['id'];
      this.setProduct();
    });

    this.products$.subscribe(products => {
      this.products = products;
      this.setProduct();
    });
  }

  changeQuantity(newQuantity:number){
    this.quantity = newQuantity;
  }

  addToCart($event){
    this.store.dispatch(addToCart(this.product.id, this.quantity));
    $event.target.blur();
  }
}
