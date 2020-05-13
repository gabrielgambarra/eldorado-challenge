import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  })
export class AuthInterceptor implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token: string = localStorage.getItem('token');

        if (token) {
            req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
            req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        }
    
        return next.handle(req).pipe(
          catchError((error: HttpErrorResponse) => {
            if (error && error.status === 401) {
              console.log("Error 401 UNAUTHORIZED");
            }
            const err = error.error.message || error.statusText;
            return throwError(error);
          })
        );
      }
}
