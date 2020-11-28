import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { BrowserModule } from '@angular/platform-browser';
import { FoodState } from '../models/food.redux';
import { PrincipalComponent } from './principal.component';


@NgModule({
  declarations: [PrincipalComponent],
  imports: [
    BrowserModule,
    CommonModule,
    NgxsModule.forRoot([
      FoodState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  exports: [
    
  ]
})
export class CardsPageModule { }
