
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BotCommonModule } from '../common/common.module';
import { BotRoutingModule } from './bot-routing.module';
import { BotComponent } from './bot.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    BotComponent
  ],
  imports: [
    BotRoutingModule, 
    BotCommonModule,
    CommonModule,
    
  ],
  providers: [],
  exports: [
    BotComponent,
    BotRoutingModule,
  ]
})
export class BotModule {}
