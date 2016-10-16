import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output
} from '@angular/core';



@Component({
  selector: 'quantity-selector',
  styles: [`
    :host {
      height: 38px;
      display: inline-block;
    }
    .number, .actions {
      height: 38px;
      width: 38px;
      float: left;
      text-align: center;
    }
    .number {
      line-height: 38px;
      background: #eee;
    }
    .actions {
      margin-left: 2px;
      width: 18px;
    }
    .actions div {
      height: 18px;
      width: 18px;
      line-height: 17px;
      background: #dadada;
    }
    .actions div:first-child {
      margin-bottom: 2px;
    }
    .actions div:hover {
      cursor: pointer;
      background: #333;
      color: white;
    }
    .
  `],

  template: `
    <div class="number noselect">
      {{quantity}}
    </div>
    <div class="actions">
      <div (click)="plusOne()" class="noselect">+</div>
      <div (click)="minusOne()" class="noselect">-</div>
    </div>
    <div class="u-clf"></div>
  `
})
export class QuantitySelectorComponent implements OnInit {

  @Input() quantity:number = 1;
  @Output() change = new EventEmitter<number>();
  constructor() { }

  ngOnInit() { }


  plusOne(){
    if (this.quantity < 10000){
      this.quantity++;
      this.change.emit(this.quantity);
    }
  }

  minusOne(){
    if (this.quantity > 1){
      this.quantity--;
      this.change.emit(this.quantity);
    }
  }
}
