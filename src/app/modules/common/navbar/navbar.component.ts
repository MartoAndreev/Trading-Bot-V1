import { Component } from '@angular/core';
import { AppService } from 'src/app/providers/app.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public home = ['main', 'home'];
  constructor(private appService: AppService) { }
  getUser() {
    let test = this.appService.getUser("0.1402232014159086").subscribe((data) => {
      console.log(data)
    });
    this.appService.getAllCriptos().subscribe((data) => {
      console.log(data);

    });
    this.appService.getAllCriptos().pipe
    console.log(test)
  }
}
