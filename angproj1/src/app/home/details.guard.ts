import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsGuard implements CanActivate {

  constructor(private _router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let id = +route.url[1].path
      if(isNaN(id)|| id<1){
        alert('Invalid Url')
        this._router.navigate(['/home'])
        return false
      }
    return true;
  }
  
}
