import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class Xhttpinterceptor implements HttpInterceptor {
    constructor(private cookieService: CookieService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone({
            headers: req.headers.set(
                'Authorization',
                'Bearer ' + this.cookieService.get('token')
            )
        });
        return next.handle(authReq);
    }
}
