import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoreComponent} from "./components/core/core.component";
import {CostsResolver} from "./resolvers/costs.resolver";
import {ExchangeRatesResolver} from "./resolvers/exchange-rates.resolver";

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    resolve: {
      costs: CostsResolver,
      exchangeRates: ExchangeRatesResolver,
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
