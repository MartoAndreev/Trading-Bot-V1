import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PriceCardComponent } from './price-card/price-card.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
    declarations: [
        NavbarComponent,
        PriceCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatTableModule,
    ],
    providers: [],
    exports: [
        NavbarComponent,
        PriceCardComponent,
        MatTableModule,
    ]
})
export class BotCommonModule { }
