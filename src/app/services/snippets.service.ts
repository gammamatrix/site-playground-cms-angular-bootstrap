import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {
  SnippetsIndexParams,
  SnippetRevisionsIndexParams,
  Snippet,
  SnippetRevision,
  SnippetRequestCreateInfo,
  ResponseIndexMeta,
  ResponseShowMeta,
  SelectOptionString,
  SnippetsResponse,
  SnippetRevisionResponse,
  SnippetRevisionsResponse,
  SnippetResponse
} from '../app.types';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnippetsService {
  constructor(private http: HttpClient) {}

  private apiUrl: string = environment.apiUrl;
  protected snippetsMeta: ResponseIndexMeta | undefined;

  protected snippet$: Observable<Snippet> | undefined;
  protected snippetMeta$: ResponseShowMeta | undefined;

  public snippetTypes: SelectOptionString[] = [
    { value: 'banner', label: 'Banner' },
    { value: 'slideshow', label: 'Slideshow' },
    { value: 'widget', label: 'Widget' }
  ];

  getApiUrl(): string {
    console.debug('SnippetsService.getApiUrl', { apiUrl: this.apiUrl });
    return this.apiUrl;
  }

  isReady(): boolean {
    console.debug('SnippetsService.isReady', { apiUrl: this.apiUrl });
    return this.apiUrl.startsWith('//');
  }

  private handleError = (error: HttpErrorResponse) => {
    console.error('SnippetsService.handleError', { error: error });
    let message = 'An error occurred';
    if (error.error.message) {
      message = error.error.message;
    } else if (error.error.error) {
      message = error.error.error;
    }
    return throwError(() => new Error(message));
  };

  createInfo(options?: SnippetRequestCreateInfo): Observable<Snippet> {
    const params = new HttpParams()
      .set('owned_by_id', options?.owned_by_id ?? '')
      .set('parent_id', options?.parent_id ?? '')
      .set('snippet_type', options?.snippet_type ?? '');
    console.debug('SnippetsService.createInfo', {
      options: options,
      apiUrl: this.apiUrl
    });
    return this.http
      .get<SnippetResponse>(`${this.apiUrl}/snippets/create`, {
        params: params
      })
      .pipe(
        map((response: SnippetResponse) => {
          this.snippetMeta$ = response['meta'];
          console.debug('SnippetsService.createInfo()', {
            response: response
          });
          return response.data;
        }),
        catchError(this.handleError)
      );
  }

  create(model: Snippet): Observable<Snippet> {
    return this.http
      .post<SnippetResponse>(`${this.apiUrl}/snippets`, model)
      .pipe(
        map((response: SnippetResponse) => {
          console.debug('SnippetService.create()', {
            response: response
          });
          return response.data;
        }),
        catchError(this.handleError)
      );
  }

  delete(model: Snippet): Observable<boolean> {
    return this.http
      .delete<Snippet>(`${this.apiUrl}/snippets/${model.id}?force=1`)
      .pipe(
        map(() => {
          return true;
        }),
        catchError(this.handleError)
      );
  }

  editInfo(id: string): Observable<Snippet> {
    console.debug('SnippetsService.findOne', {
      id: id,
      apiUrl: this.apiUrl
    });
    return this.http
      .get<SnippetResponse>(`${this.apiUrl}/snippets/edit/${id}`)
      .pipe(
        map((response: SnippetResponse) => {
          this.snippetMeta$ = response['meta'];
          console.debug('SnippetsService.get()', {
            response: response
          });
          return response.data;
        }),
        catchError(this.handleError)
      );
  }

  get(id: string): Observable<Snippet> {
    console.debug('SnippetsService.findOne', {
      id: id,
      apiUrl: this.apiUrl
    });
    return this.http.get<SnippetResponse>(`${this.apiUrl}/snippets/${id}`).pipe(
      map((response: SnippetResponse) => {
        this.snippetMeta$ = response['meta'];
        console.debug('SnippetsService.get()', {
          response: response
        });
        return response.data;
      }),
      catchError(this.handleError)
    );
  }

  index(params: SnippetsIndexParams): Observable<SnippetsResponse> {
    return this.http
      .post<SnippetsResponse>(`${this.apiUrl}/snippets/index`, params)
      .pipe(catchError(this.handleError));
  }

  lock(model: Snippet): Observable<Snippet> {
    return this.http
      .put<SnippetResponse>(`${this.apiUrl}/snippets/lock/${model.id}`, null)
      .pipe(
        map((response: SnippetResponse) => {
          console.debug('SnippetService.lock()', {
            response: response
          });
          return response.data;
        }),
        catchError(this.handleError)
      );
  }

  revisions(
    snippet_id: string,
    params: SnippetRevisionsIndexParams
  ): Observable<SnippetRevisionsResponse> {
    return this.http
      .post<SnippetRevisionsResponse>(
        `${this.apiUrl}/snippets/${snippet_id}/revisions`,
        params
      )
      .pipe(catchError(this.handleError));
  }

  revision(revision_id: string): Observable<SnippetRevision> {
    return this.http
      .get<SnippetRevisionResponse>(
        `${this.apiUrl}/snippets/revision${revision_id}`
      )
      .pipe(
        map((response: SnippetRevisionResponse) => {
          console.debug('SnippetService.revision()', {
            response: response
          });
          return response.data;
        })
      );
  }

  restore(model: Snippet): Observable<Snippet> {
    return this.http
      .put<SnippetResponse>(`${this.apiUrl}/snippets/restore/${model.id}`, null)
      .pipe(
        map((response: SnippetResponse) => {
          console.debug('SnippetService.restore()', {
            response: response
          });
          return response.data;
        }),
        catchError(this.handleError)
      );
  }

  restoreRevision(revision_id: string): Observable<Snippet> {
    return this.http
      .put<SnippetResponse>(
        `${this.apiUrl}/snippets/revision${revision_id}`,
        null
      )
      .pipe(
        map((response: SnippetResponse) => {
          console.debug('SnippetService.update()', {
            response: response
          });
          return response.data;
        }),
        catchError(this.handleError)
      );
  }

  trash(model: Snippet): Observable<boolean> {
    return this.http
      .delete<Snippet>(`${this.apiUrl}/snippets/${model.id}`)
      .pipe(
        map(() => {
          return true;
        }),
        catchError(this.handleError)
      );
  }

  unlock(model: Snippet): Observable<Snippet> {
    return this.http
      .delete<SnippetResponse>(`${this.apiUrl}/snippets/lock/${model.id}`)
      .pipe(
        map((response: SnippetResponse) => {
          console.debug('SnippetService.unlock()', {
            response: response
          });
          return response.data;
        }),
        catchError(this.handleError)
      );
  }

  update(model: Snippet): Observable<Snippet> {
    return this.http
      .patch<SnippetResponse>(`${this.apiUrl}/snippets/${model.id}`, model)
      .pipe(
        map((response: SnippetResponse) => {
          console.debug('SnippetService.update()', {
            response: response
          });
          return response.data;
        }),
        catchError(this.handleError)
      );
  }
}
