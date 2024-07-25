import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {
  PagesIndexParams,
  PageRevisionsIndexParams,
  Page,
  PageRevision,
  PageRequestCreateInfo,
  ResponseIndexMeta,
  ResponseShowMeta,
  SelectOptionString,
  PagesResponse,
  PageRevisionResponse,
  PageRevisionsResponse,
  PageResponse
} from '../app.types';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  constructor(private http: HttpClient) {}

  private apiUrl: string = environment.apiUrl;
  protected pagesMeta: ResponseIndexMeta | undefined;

  protected page$: Observable<Page> | undefined;
  protected pageMeta$: ResponseShowMeta | undefined;

  public pageTypes: SelectOptionString[] = [
    { value: 'article', label: 'Article' },
    { value: 'book', label: 'Book' },
    { value: 'notes', label: 'Notes' },
    { value: 'magazine', label: 'Magazine' },
    { value: 'newspaper', label: 'Newspaper' },
    { value: 'periodical', label: 'Periodical' },
    { value: 'policy', label: 'Policy' },
    { value: 'plan', label: 'Plan' },
    { value: 'research', label: 'Research' },
    { value: 'scratch', label: 'Scratch' }
  ];

  getApiUrl(): string {
    console.debug('PagesService.getApiUrl', { apiUrl: this.apiUrl });
    return this.apiUrl;
  }

  isReady(): boolean {
    console.debug('PagesService.isReady', { apiUrl: this.apiUrl });
    return this.apiUrl.startsWith('//');
  }

  private handleError = (error: HttpErrorResponse) => {
    console.error('PagesService.handleError', { error: error });
    let message = 'An error occurred';
    if (error.error.message) {
      message = error.error.message;
    } else if (error.error.error) {
      message = error.error.error;
    }
    return throwError(() => new Error(message));
  };

  createInfo(options?: PageRequestCreateInfo): Observable<Page> {
    const params = new HttpParams()
      .set('owned_by_id', options?.owned_by_id ?? '')
      .set('parent_id', options?.parent_id ?? '')
      .set('page_type', options?.page_type ?? '');
    console.debug('PagesService.createInfo', {
      options: options,
      apiUrl: this.apiUrl
    });
    return this.http
      .get<PageResponse>(`${this.apiUrl}/pages/create`, {
        params: params
      })
      .pipe(
        map((response: PageResponse) => {
          this.pageMeta$ = response['meta'];
          console.debug('PagesService.createInfo()', {
            response: response
          });
          return response.data;
        }),
        catchError(this.handleError)
      );
  }

  create(model: Page): Observable<Page> {
    return this.http.post<PageResponse>(`${this.apiUrl}/pages`, model).pipe(
      map((response: PageResponse) => {
        console.debug('PagesService.create()', {
          response: response
        });
        return response.data;
      }),
      catchError(this.handleError)
    );
  }

  delete(model: Page): Observable<boolean> {
    return this.http
      .delete<Page>(`${this.apiUrl}/pages/${model.id}?force=1`)
      .pipe(
        map(() => {
          return true;
        }),
        catchError(this.handleError)
      );
  }

  editInfo(id: string): Observable<Page> {
    console.debug('PagesService.findOne', {
      id: id,
      apiUrl: this.apiUrl
    });
    return this.http.get<PageResponse>(`${this.apiUrl}/pages/edit/${id}`).pipe(
      map((response: PageResponse) => {
        this.pageMeta$ = response['meta'];
        console.debug('PagesService.editInfo()', {
          response: response
        });
        return response.data;
      }),
      catchError(this.handleError)
    );
  }

  get(id: string): Observable<Page> {
    console.debug('PagesService.findOne', {
      id: id,
      apiUrl: this.apiUrl
    });
    return this.http.get<PageResponse>(`${this.apiUrl}/pages/${id}`).pipe(
      map((response: PageResponse) => {
        this.pageMeta$ = response['meta'];
        console.debug('PagesService.get()', {
          response: response
        });
        return response.data;
      }),
      catchError(this.handleError)
    );
  }

  index(params: PagesIndexParams): Observable<PagesResponse> {
    return this.http
      .post<PagesResponse>(`${this.apiUrl}/pages/index`, params)
      .pipe(catchError(this.handleError));
  }

  lock(model: Page): Observable<Page> {
    return this.http
      .put<PageResponse>(`${this.apiUrl}/pages/lock/${model.id}`, null)
      .pipe(
        map((response: PageResponse) => {
          console.debug('PagesService.lock()', {
            response: response
          });
          return response.data;
        }),
        catchError(this.handleError)
      );
  }

  revisions(
    page_id: string,
    params: PageRevisionsIndexParams
  ): Observable<PageRevisionsResponse> {
    return this.http
      .post<PageRevisionsResponse>(
        `${this.apiUrl}/pages/${page_id}/revisions`,
        params
      )
      .pipe(catchError(this.handleError));
  }

  revision(revision_id: string): Observable<PageRevision> {
    return this.http
      .get<PageRevisionResponse>(`${this.apiUrl}/pages/revision${revision_id}`)
      .pipe(
        map((response: PageRevisionResponse) => {
          console.debug('PagesService.revision()', {
            response: response
          });
          return response.data;
        }),
        catchError(this.handleError)
      );
  }

  restore(model: Page): Observable<Page> {
    return this.http
      .put<PageResponse>(`${this.apiUrl}/pages/restore/${model.id}`, null)
      .pipe(
        map((response: PageResponse) => {
          console.debug('PagesService.restore()', {
            response: response
          });
          return response.data;
        }),
        catchError(this.handleError)
      );
  }

  restoreRevision(revision_id: string): Observable<Page> {
    return this.http.put<Page>(
      `${this.apiUrl}/pages/revision${revision_id}`,
      null
    );
  }

  trash(model: Page): Observable<boolean> {
    return this.http
      .delete<PageResponse>(`${this.apiUrl}/pages/${model.id}`)
      .pipe(
        map(() => {
          return true;
        }),
        catchError(this.handleError)
      );
  }

  unlock(model: Page): Observable<Page> {
    return this.http
      .delete<PageResponse>(`${this.apiUrl}/pages/lock/${model.id}`)
      .pipe(
        map((response: PageResponse) => {
          console.debug('PagesService.unlock()', {
            response: response
          });
          return response.data;
        }),
        catchError(this.handleError)
      );
  }

  update(model: Page): Observable<Page> {
    return this.http
      .patch<PageResponse>(`${this.apiUrl}/pages/${model.id}`, model)
      .pipe(
        map((response: PageResponse) => {
          console.debug('PagesService.update()', {
            response: response
          });
          return response.data;
        }),
        catchError(this.handleError)
      );
  }
}
