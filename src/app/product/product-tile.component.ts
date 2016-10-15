import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../shared';

import { NgRedux } from 'ng2-redux';
import { AppState } from '../app.state';
import { addToCart } from '../app.actions';

@Component({
  selector: 'product-tile',
  styleUrls : ['product-tile.component.scss'],
  templateUrl: 'product-tile.component.html'
})
export class ProductTileComponent implements OnInit {

  @Input() product:Product;

  constructor(private store: NgRedux<AppState>) { }

  ngOnInit() { }

  addToCart(){
    this.store.dispatch(addToCart(this.product.id));
  }
}
