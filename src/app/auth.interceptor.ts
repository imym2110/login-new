import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrapiService } from './strapi.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authservice: StrapiService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

     console.log(request, 'R')
    const account = this.authservice.getToken();
        console.log(account, 'A')
        if (account) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${account}` }
            });
        }
  
        return next.handle(request);
  }
}


