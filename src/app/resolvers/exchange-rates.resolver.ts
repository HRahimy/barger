import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {IExchangeRate} from "../interfaces/exchange-rate.interface";

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesResolver implements Resolve<IExchangeRate> {
  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IExchangeRate> {
    console.log('resolving exchange rates...');
    return this.http.get<IExchangeRate>('http://localhost:4200/assets/exchange-rates.json');
  }
}
