
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BotCommonModule } from '../common/common.module';
import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './wallet.component';

@NgModule({
  declarations: [
    WalletComponent
  ],
  imports: [
    WalletRoutingModule, 
    BotCommonModule,
    CommonModule
  ],
  providers: [],
  exports: [
    WalletComponent,
    WalletRoutingModule
  ]
})
export class WalletModule { }
