import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Key } from '../../node_modules/protractor';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private cookieService: CookieService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Hola');
    const jsessionid =  this.cookieService.get('JSESSIONID');
    console.log(jsessionid);

    // Clone the request to add the new header
    const clonedRequest = req.clone({ headers: req.headers.set('Set-Cookie', 'JSESSIONID=' + jsessionid) });

    // Pass control to the next request
    return next.handle(clonedRequest);
  }
}


