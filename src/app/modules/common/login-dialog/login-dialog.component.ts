import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { login } from '../../app/store/app.actions';

@Component({
    selector: 'login-dialog',
    templateUrl: 'login-dialog.component.html',
    styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {

    public loginForm: FormGroup = new FormGroup({
        email: new FormControl("", Validators.required),
        pass: new FormControl("", Validators.required),
    })

    constructor(
        public store: Store,
        public dialogRef: MatDialogRef<LoginDialogComponent>,
    ) { }

    loginRequest(email: string, pass: string) {

        if (email && pass) {

            this.store.dispatch(login({
                params: {
                    email: email,
                    password: pass
                }
            }))
        }
        this.dialogRef.close();
    }
}