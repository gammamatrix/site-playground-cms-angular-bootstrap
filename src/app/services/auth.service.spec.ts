import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

describe('AuthService', () => {
  let routerSpy: jasmine.SpyObj<Router>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: AuthService;
  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['get']);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AuthService(httpClientSpy, routerSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('isReady should be true', () => {
    expect(service.isReady()).toBe(true);
  });

  it('getAuthUrl should return an API URL for authentication', () => {
    expect(service.getAuthUrl()).toBe('//site-api-angular');
  });
});
