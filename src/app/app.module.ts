import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreComponent} from './components/core/core.component';
import {HttpClientModule} from '@angular/common/http';
import {CurrencyDropdownComponent} from './components/currency-dropdown/currency-dropdown.component';
import { BaseToCurrentDisplayComponent } from './components/base-to-current-display/base-to-current-display.component';
import { CostTableComponent } from './components/cost-table/cost-table.component';
import { SubCostDisplayComponent } from './components/sub-cost-display/sub-cost-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    CurrencyDropdownComponent,
    BaseToCurrentDisplayComponent,
    CostTableComponent,
    SubCostDisplayComponent
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
