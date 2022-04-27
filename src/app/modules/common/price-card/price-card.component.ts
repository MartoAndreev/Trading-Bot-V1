import { Component, Input } from '@angular/core';
import { ListRequestRes } from '../../app/store/interfaces';

@Component({
  selector: 'price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent {
  @Input() priceItem: ListRequestRes = {};
  constructor() {
    if (this.priceItem.dayChange) {
      this.priceItem.dayChange = this.priceItem.dayChange * 100;
    }

  }

  sliceNumber9(eprice: string) {
    return eprice.slice(0, 9);
  }

  sliceNumber16(eprice: string) {
    return eprice.slice(0, 16);
  }
}
