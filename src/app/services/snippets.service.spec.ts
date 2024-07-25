import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { SnippetsService } from './snippets.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import {
  mockSnippetOne,
  mockSnippetOneResponse,
  mockSnippetsOneResponse,
  mockSnippetRevisionsOneResponse
} from '../../mock/snippets';
import { environment } from '../../environments/environment';
import { Snippet } from '../app.types';
import { SnippetsIndexParams, SnippetRevisionsIndexParams } from '../app.types';

describe('SnippetsService', () => {
  let httpController: HttpTestingController;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: SnippetsService;
  const url: string = environment.apiUrl;
  const id: string = mockSnippetOne.id ?? '';

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SnippetsService(httpClientSpy);

    await TestBed.configureTestingModule({
      providers: [
        HttpClient,
        SnippetsService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    service = TestBed.inject(SnippetsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('isReady should be true', () => {
    expect(service.isReady()).toBe(true);
  });

  it('should call createInfo and return an prefilled snippet', async () => {
    service.createInfo().subscribe((response: Snippet) => {
      expect(response).toEqual(mockSnippetOne);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}/snippets/create?owned_by_id=&parent_id=&snippet_type=`
    });

    expect(req.request.method).toBe('GET');

    req.flush(mockSnippetOneResponse);

    httpController.verify();
  });

  it('should call create and return a single snippet', () => {
    service.create(mockSnippetOne).subscribe((response) => {
      expect(response).toEqual(mockSnippetOne);
    });

    const req = httpController.expectOne({
      method: 'POST',
      url: `${url}/snippets`
    });

    req.flush(mockSnippetOneResponse);

    httpController.verify();
  });

  it('should call delete and return true', () => {
    service.delete(mockSnippetOne).subscribe((response) => {
      expect(response).toEqual(true);
    });

    const req = httpController.expectOne({
      method: 'DELETE',
      url: `${url}/snippets/${id}?force=1`
    });

    req.flush(true);

    httpController.verify();
  });

  it('should call editInfo and return an prefilled snippet', () => {
    service.editInfo(id).subscribe((response) => {
      expect(response).toEqual(mockSnippetOne);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}/snippets/edit/${id}`
    });

    req.flush(mockSnippetOneResponse);

    httpController.verify();
  });

  it('should call get and return a single snippet', () => {
    service.get(id).subscribe((response) => {
      expect(response).toEqual(mockSnippetOne);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}/snippets/${id}`
    });

    req.flush(mockSnippetOneResponse);

    httpController.verify();
  });

  it('should call index and return the full response with data, links and meta', () => {
    const options: SnippetsIndexParams = {
      perPage: 10,
      page: 1,
      offset: 0,
      filter: {
        trash: ''
      }
    };

    service.index(options).subscribe((response) => {
      expect(response).toEqual(mockSnippetsOneResponse);
    });

    const req = httpController.expectOne({
      method: 'POST',
      url: `${url}/snippets/index`
    });

    req.flush(mockSnippetsOneResponse);

    httpController.verify();
  });

  it('should call lock and return a single snippet', () => {
    service.lock(mockSnippetOne).subscribe((response) => {
      expect(response).toEqual(mockSnippetOne);
    });

    const req = httpController.expectOne({
      method: 'PUT',
      url: `${url}/snippets/lock/${id}`
    });

    req.flush(mockSnippetOneResponse);

    httpController.verify();
  });

  it('should call revisions and return the full response with data, links and meta', () => {
    const options: SnippetRevisionsIndexParams = {
      perPage: 10,
      page: 1,
      offset: 0,
      filter: {
        trash: ''
      }
    };

    service.revisions(id, options).subscribe((response) => {
      expect(response).toEqual(mockSnippetRevisionsOneResponse);
    });

    const req = httpController.expectOne({
      method: 'POST',
      url: `${url}/snippets/${id}/revisions`
    });

    req.flush(mockSnippetRevisionsOneResponse);

    httpController.verify();
  });

  it('should call trash and return true', () => {
    service.trash(mockSnippetOne).subscribe((response) => {
      expect(response).toEqual(true);
    });

    const req = httpController.expectOne({
      method: 'DELETE',
      url: `${url}/snippets/${id}`
    });

    req.flush(true);

    httpController.verify();
  });

  it('should call unlock and return a single snippet', () => {
    service.unlock(mockSnippetOne).subscribe((response) => {
      expect(response).toEqual(mockSnippetOne);
    });

    const req = httpController.expectOne({
      method: 'DELETE',
      url: `${url}/snippets/lock/${id}`
    });

    req.flush(mockSnippetOneResponse);

    httpController.verify();
  });

  it('should call update and return a single snippet', () => {
    service.update(mockSnippetOne).subscribe((response) => {
      expect(response).toEqual(mockSnippetOne);
    });

    const req = httpController.expectOne({
      method: 'PATCH',
      url: `${url}/snippets/${id}`
    });

    req.flush(mockSnippetOneResponse);

    httpController.verify();
  });
});
