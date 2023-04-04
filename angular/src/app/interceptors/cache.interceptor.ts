import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

const cache: Record<string, any> = {};

export class CacheInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(`${req.method} - ${req.urlWithParams}`);
    const endpoint = req.urlWithParams.split('/').at(-1);
    const isEndpointCached = endpoint && endpoint in cache;

    if (isEndpointCached && req.method === 'GET') {
      console.log(cache[endpoint])
      return of(cache[endpoint]);
    }

    return next.handle(req).pipe(
      tap((res) => {
        if (endpoint && res instanceof HttpResponse) {
          cache[endpoint] = res;
        }
      })
    );
  }
}
