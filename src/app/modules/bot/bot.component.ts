import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'H', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'H', weight: 4.0026, symbol: 'H'},
  {position: 3, name: 'L', weight: 6.941, symbol: 'L'},
  {position: 4, name: 'B', weight: 9.0122, symbol: 'B'},
  {position: 5, name: 'B', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'C', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'N', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'O', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'F', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'N', weight: 20.1797, symbol: 'N'},
];

@Component({
  selector: 'bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(){
   
  }
}
