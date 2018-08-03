import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
// import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Hola');
    const token =  this.cookieService.get('access_token');
    console.log(token);

    // Clone the request to add the new header
    const clonedRequest = req.clone({ withCredentials: true , headers: req.headers.set('Authorization', 'Bearer ' + token) });
    // 'Authorization': 'Bearer '+ cookies.get('access_token'),
    // Pass control to the next request
    return next.handle(clonedRequest);
  }
  //   headers: HttpHeaders;
  //   token: String;
  // public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   this.token =  this.cookieService.get('access_token');
  //   const authorizationReq = this.setAuthHeader(req);
  //   const handledRequest = next.handle(authorizationReq);
  //   return handledRequest;
  // }
  // private setAuthHeader(req: HttpRequest<any>): HttpRequest<any> {
  //   const authorization = 'Bearer ' + this.token;
  //   const headers = req.headers.set('Authorization', authorization);
  //   console.log(headers);
  //   const authorizationReq = req.clone({ headers });
  //   return authorizationReq;
  // }
}
