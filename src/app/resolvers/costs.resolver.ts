import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {ICostsResponse} from "../interfaces/costs-response.interface";

@Injectable({
  providedIn: 'root'
})
export class CostsResolver implements Resolve<ICostsResponse> {
  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICostsResponse> {
    console.log('resolving costs...');
    return this.http.get<ICostsResponse>('http://localhost:4200/assets/costs.json');
  }
}
