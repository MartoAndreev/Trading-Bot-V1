
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BotCommonModule } from '../common/common.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule, 
    BotCommonModule,
  ],
  providers: [],
  exports: [
    MainComponent,
    MainRoutingModule
  ]
})
export class MainModule { }
