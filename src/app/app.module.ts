import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import {routing} from "./quotes/app.routing";
import {QuoteService} from "./quote.service";
import { SingupComponent } from './singup/singup.component';
import { SinginComponent } from './singin/singin.component';
import {AuthService} from "./auth.service";

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotesComponent,
    NewQuoteComponent,
    SingupComponent,
    SinginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [QuoteService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
