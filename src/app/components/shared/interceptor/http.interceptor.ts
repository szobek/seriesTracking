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

        req = req.clone({headers: req.headers.set('Content-Type', 'X-Auth-Token')});
        req = req.clone({headers: req.headers.set('Access-Control-Allow-Origin', '*')});
        req = req.clone({headers: req.headers.set('Access-Control-Allow-Method', 'GET, POST, PATCH, PUT, DELETE, OPTION')});
        req = req.clone({headers: req.headers.set('Access-Control-Allow-Headers', 'Origin')});


        /*
        Access-Control-Allow-Origin: *
        Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS
        Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token
        */

        return next.handle(req);
    }
}

