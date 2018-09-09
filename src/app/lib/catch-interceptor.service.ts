import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CatchInterceptorService {

  constructor() { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Estoy en el catch interceptor');
    return next.handle(req);
  }

}
