import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

describe('AuthService', () => {
  let routerSpy: jasmine.SpyObj<Router>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let authService: AuthService;
  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['get']);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    authService = new AuthService(httpClientSpy, routerSpy);
  });

  it('isReady should be true', () => {
    expect(authService.isReady()).toBe(true);
  });

  it('getAuthUrl should return an API URL for authentication', () => {
    expect(authService.getAuthUrl()).toBe('//site-api-angular');
  });
});
