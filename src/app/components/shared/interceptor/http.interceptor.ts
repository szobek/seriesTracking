import {Injectable} from '@angular/core';
import {
    HttpInterceptor,
    HttpEvent,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        req = req.clone({headers: req.headers.set('Content-Type', 'application/json')});
        req = req.clone({headers: req.headers.set('Access-Control-Allow-Origin', '*')});

        return next.handle(req);
    }
}

