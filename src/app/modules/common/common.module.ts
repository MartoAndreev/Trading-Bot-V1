import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PriceCardComponent } from './price-card/price-card.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    declarations: [
        NavbarComponent,
        PriceCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatTableModule,
        MatFormFieldModule,
        MatIconModule,
        MatDialogModule
    ],
    providers: [],
    exports: [
        NavbarComponent,
        PriceCardComponent,
        MatTableModule,
        MatIconModule,
        MatDialogModule

    ]
})
export class BotCommonModule { }
