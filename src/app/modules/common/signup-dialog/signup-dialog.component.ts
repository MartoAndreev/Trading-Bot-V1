import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { signup } from '../../app/store/app.actions';

@Component({
    selector: 'signup-dialog',
    templateUrl: 'signup-dialog.component.html',
    styleUrls: ['./signup-dialog.component.css']
})
export class SignUpDialogComponent {

    public signupForm: FormGroup = new FormGroup({
        email: new FormControl("", Validators.required),
        pass: new FormControl("", Validators.required),
        balance: new FormControl(null, Validators.required),
    })

    constructor(
        public store: Store,
        public dialogRef: MatDialogRef<SignUpDialogComponent>,
    ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
    signupRequest(email: string, pass: string, balance: string) {
        console.log(email, pass, balance);

        if (email && pass && balance) {

            this.store.dispatch(signup({
                params: {
                    email: email,
                    password: pass,
                    balance: Number(balance)
                }
            }))
        }
        this.dialogRef.close();
    }
}
