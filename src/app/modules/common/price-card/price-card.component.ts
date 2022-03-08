import { Component, Input } from '@angular/core';

@Component({
  selector: 'price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent {
  @Input() priceItem: PriceCard = {};
  constructor(){
    console.log(this.priceItem)
  }
}

export interface PriceCard {
  name?: string,
  tag?: string,
  price?: number,
  percentage?: number,
  overallPrice?: number,
  graf?: any
}