import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BotComponent } from './bot.component';

const routes: Routes = [
    { 
        path: "", component: BotComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BotRoutingModule { }