import { Component } from '@angular/core';
import { AppService } from 'src/app/providers/app.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(public webServece: AppService) {
    let test = webServece.getAllCriptos()
  }
  test() {
    let res = this.webServece.getAllCriptos()
  }


}

