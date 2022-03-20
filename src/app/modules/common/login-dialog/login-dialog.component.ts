import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'login-dialog',
    templateUrl: 'login-dialog.component.html',
    styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<LoginDialogComponent>,
    ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}