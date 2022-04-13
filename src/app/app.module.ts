import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreComponent} from './components/core/core.component';
import {HttpClientModule} from "@angular/common/http";
import { CurrencyDropdownComponent } from './components/currency-dropdown/currency-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    CurrencyDropdownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
