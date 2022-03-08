import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MainComponent } from './main.component';

const routes: Routes = [
    {
        path: '', component: MainComponent, children: [
            { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
            { path: 'wallet', loadChildren: () => import('../wallet/wallet.module').then(m => m.WalletModule) },
            { path: 'account', loadChildren: () => import('../account/account.module').then(m => m.AccountModule) },
            { path: 'bot', loadChildren: () => import('../bot/bot.module').then(m => m.BotModule) },
            // { path: 'profile', canActivate: [AuthGuard], loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule), },
            // { path: 'custom-search', loadChildren: () => import('../custom-search-form/custom-search-form.module').then(m => m.CustomSearchFormModule) },
            // { path: 'course', loadChildren: () => import('../course/course.module').then(m => m.CourseModule) },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MainRoutingModule { }