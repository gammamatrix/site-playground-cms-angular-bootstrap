import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import {
  AuthToken as iAuthToken,
  CreateToken as iCreateToken,
  Login as iLogin,
  Logout as iLogout,
  LogoutToken as iLogoutToken,
} from '../app.types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl: string = environment.authUrl;

  private auth = new ReplaySubject<boolean>(1);
  isAuthenticated = this.auth.asObservable();

  constructor(
    private http: HttpClient,
    public router: Router,
  ) {}

  getAuthUrl(): string {
    console.debug('AuthService.getAuthUrl', { authUrl: this.authUrl });
    return this.authUrl;
  }

  isReady(): boolean {
    console.debug('AuthService.isReady', { authUrl: this.authUrl });
    return this.authUrl.startsWith('//');
  }

  login(auth: iLogin): Observable<boolean> {
    return this.http
      .post<iAuthToken>(this.authUrl + '/api/login', auth, {
        withCredentials: true,
      })
      .pipe(
        map((result) => {
          localStorage.setItem('app_token', result.token);
          localStorage.setItem('csrf_token', result.csrf_token);
          return true;
        }),
      );
  }

  /**
   * Request a CSFR token for forms.
   *
   * @returns Observable<string> Returns the csfr token to submit in forms.
   */
  requestToken(): Observable<string> {
    return this.http.get<iCreateToken>(this.authUrl + '/api/token').pipe(
      map((result) => {
        localStorage.setItem('csrf_token', result.token);
        return result.token;
      }),
    );
  }

  /**
   * This Authentication API call sets up the session.
   *
   * Cookies created:
   * Set-Cookie: XSRF-TOKEN
   * Set-Cookie: _session
   *
   * @returns Observable<boolean> Returns true if a token was returned.
   */
  csrfCookie(): Observable<boolean> {
    return this.http.get(this.authUrl + '/api/sanctum/csrf-cookie').pipe(
      map((result) => {
        console.log('AuthService.csrf', {
          result: result,
        });
        return true;
      }),
    );
  }

  hasAppToken(): boolean {
    const app_token = localStorage.getItem('app_token');
    return app_token ? true : false;
  }

  getCsfrToken(): string {
    const csrf_token = localStorage.getItem('csrf_token');
    return csrf_token ?? '';
  }

  logout(logout: iLogout): Observable<iLogoutToken> {
    if (logout.session) {
      sessionStorage.clear();
    }
    if (logout.storage) {
      localStorage.clear();
    }
    return this.http
      .post<iLogoutToken>(this.authUrl + '/api/logout', logout, {
        withCredentials: true,
      })
      .pipe(
        map((result) => {
          localStorage.setItem('csrf_token', result.csrf_token);
          return result;
        }),
      );
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

  goToDashboard() {
    this.router.navigate(['dashboard']);
  }
}
