import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';      
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';  


import { AppComponent } from './app.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ItemElementComponent } from './components/item-element/item-element.component';
import { NumberService } from './services/number.service';
import { NgbdModalBasic } from './components/modal-popup/modal-basic';

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    ItemElementComponent,
    NgbdModalBasic    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],       
  providers: [
    NumberService
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
