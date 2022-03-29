import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/providers/app.service';
import { AppState, selectEmail } from '../../app/store/app.selectors';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  public email$ = this.store.select(selectEmail);
  public email: string = "";
  private subscription = new Subscription();
  public home = ['main', 'home'];
  constructor(private appService: AppService, public dialog: MatDialog, public store: Store<AppState>) {
    this.email$.pipe().subscribe((email) => {
      this.email = email;
    })
  }

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
