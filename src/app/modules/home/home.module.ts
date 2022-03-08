
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BotCommonModule } from '../common/common.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule, 
    BotCommonModule,
    CommonModule
  ],
  providers: [],
  exports: [
    HomeComponent,
    HomeRoutingModule
  ]
})
export class HomeModule { }
