import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateChildAuthGuard implements CanActivateChild {

  constructor(private httpService:HttpService){}
  
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.httpService.checkUserRole() === 'admin') {
        return true
      }
      else {
        alert("You are not an ADMIN")
        return false
      }
  }
  
}
