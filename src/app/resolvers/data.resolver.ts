import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<boolean> {
  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('resolving data...');
    return of(true);
  }
}
