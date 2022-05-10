import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { signup } from '../../app/store/app.actions';
import { AppState, selectEmail } from '../../app/store/app.selectors';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
    selector: 'signup-dialog',
    templateUrl: 'signup-dialog.component.html',
    styleUrls: ['./signup-dialog.component.css']
})
export class SignUpDialogComponent {
    
    public email$ = this.store.select(selectEmail);
    public email: string = "";
    public signupForm: FormGroup = new FormGroup({
        email: new FormControl("", Validators.required),
        pass: new FormControl("", Validators.required),
    })

    constructor(
        public store: Store<AppState>,
        public dialogRef: MatDialogRef<SignUpDialogComponent>,
        public dialog: MatDialogRef<LoginDialogComponent>
    ) {
        this.email$.pipe().subscribe((email) => {
            console.log(email);

            if (!email) {

                return;
            }
            this.email = email;
            this.dialogRef.close();
        })
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
    signupRequest(email: string, pass: string) {

        if (email && pass) {

            this.store.dispatch(signup({
                params: {
                    email: email,
                    password: pass,
                }
            }))
        }
        // this.email$.pipe().subscribe((email) => {
        //     console.log(email);

        //     if(!email){

        //       return;
        //     }
        //     this.email = email;
        //   })
    }
}
