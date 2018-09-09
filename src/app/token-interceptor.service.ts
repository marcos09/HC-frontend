import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { CookieService } from 'ngx-cookie-service';
// import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token =  this.cookieService.get('access_token');
    console.log(token);

    const clonedRequest = req.clone({ withCredentials: true , headers: req.headers.set('Authorization', 'Bearer ' + token) });
    return next.handle(clonedRequest);
  }
}
