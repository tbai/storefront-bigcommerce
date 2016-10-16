import {
  Component,
  HostBinding,
  ElementRef
} from '@angular/core';

import { NgRedux } from 'ng2-redux';
import { AppState } from '../app.state';
import { CartBaseComponent } from './cart-base.component';

import { hideCartPopup } from '../app.actions';

@Component({
  selector: 'cart-popup',
  styleUrls: ["cart-popup.component.scss"],
  templateUrl: 'cart-popup.component.html',
  host: {
    '(document:click)': 'onDocumentClick($event)',
  }
})
export class CartPopupComponent extends CartBaseComponent {

  @HostBinding("class.visible") isVisible:boolean = false;

  constructor(protected store: NgRedux<AppState>, private _eref: ElementRef) {
    super(store)
  }

  setupData(){
    super.setupData();
    let state = this.store.getState();
    this.isVisible = state.cartPopupVisible;
  }

  close() {
    this.store.dispatch(hideCartPopup());
  }

  onDocumentClick(event){
    // hide the popup when the user clicks outside
    if (this.isVisible && !this._eref.nativeElement.contains(event.target)){
      this.close();
    }
  }


}
