import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './service/auth.service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {

  const authService =  inject(AuthService);
  const authToken = authService.getToken();

  if (authToken) {
    const authReq = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      }
    });
    return next(authReq)
  }

  console.log('token');
  return next(req);
}
