import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/providers/app.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  public home = ['main', 'home'];
  constructor(private appService: AppService, public dialog: MatDialog) { }

  getUser() {
    let test = this.appService.getUser("0.1402232014159086").subscribe((data) => {
    });
    this.appService.getAllCriptos().subscribe((data) => {

    });
    this.appService.getAllCriptos().pipe
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent);
  }
}
