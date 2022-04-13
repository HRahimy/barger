import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {map, Observable, of} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {ICost} from "../interfaces/cost.interface";
import {ICostsResponse} from "../interfaces/costs-response.interface";
import {IExchangeRate} from "../interfaces/exchange-rate.interface";

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<boolean> {
  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('resolving data...');
    this.http.get<ICostsResponse>('http://localhost:4200/assets/costs.json')
      .subscribe(costs => console.log(costs));
    this.http.get<IExchangeRate>('http://localhost:4200/assets/exchange-rates.json')
      .subscribe(rates => console.log(rates));
    return of(true);
  }
}
