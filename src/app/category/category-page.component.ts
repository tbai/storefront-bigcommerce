import { Component, OnInit } from '@angular/core';

import { select, NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';

import { Product } from '../shared';

@Component({
  selector: 'category-page',
  styleUrls: ['category-page.component.scss'],
  templateUrl: 'category-page.component.html'
})
export class CategoryPageComponent implements OnInit {

  @select('products') products$: Observable<string[]>;

  sortedProductList:Product[];

  constructor(private store: NgRedux<AppState>) {

  }

  ngOnInit() {
    this.products$.subscribe(ids => {
      let products = this.store.getState().products;
      let list = Object.keys(products).map(id => products[id]);
      // Sorting like this instead of inserting in the correct position
      // due to implementation time constraint
      list.sort((a, b) => a.title.localeCompare(b.title));
      this.sortedProductList = list;
    });
  }
}
