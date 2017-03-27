import {Route, RouterModule, Routes} from "@angular/router";
import {QuotesComponent} from "./quotes.component";
import {NewQuoteComponent} from "../new-quote/new-quote.component";
import {ModuleWithProviders} from "@angular/core";
import {SingupComponent} from "../singup/singup.component";
import {SinginComponent} from "../singin/singin.component";
const APP_ROUTES: Routes =[
    {path: '' , component: QuotesComponent} ,
    {path: 'new-quote' , component: NewQuoteComponent },
    {path: 'signup' , component: SingupComponent } ,
    {path: 'signin' , component: SinginComponent } ,
];

export  const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);