
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BotCommonModule } from '../common/common.module';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    AccountRoutingModule, 
    BotCommonModule,
    CommonModule
  ],
  providers: [],
  exports: [
    AccountComponent,
    AccountRoutingModule
  ]
})
export class AccountModule { }
