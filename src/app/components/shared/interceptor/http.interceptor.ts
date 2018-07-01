import {Injectable} from '@angular/core';
import {
    HttpInterceptor,
    HttpEvent,
    HttpHandler,
    HttpRequest, HttpHeaders,
} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        // req = req.clone({ headers: req.headers.set('X-Content-Type-Options', 'nosniff') });
        // req = req.clone({headers: req.headers.set('Accept', 'application/json')});
        // req = req.clone({headers: req.headers.set('Access-Control-Allow-Credentials', 'true')});
        // req = req.clone({headers: req.headers.set('Access-Control-Allow-Origin', '*')});
        // req = req.clone({headers: req.headers.set('Access-Control-Allow-Method', 'GET, POST, PATCH, PUT, DELETE, OPTION')});
        // req = req.clone({headers: req.headers.set('Access-Control-Allow-Headers', 'Origin')});
        // req = req.clone({headers: req.headers.set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token')});


        /*
        Access-Control-Allow-Origin: *
        Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS
        Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token
        */

        return next.handle(req);
    }



}

