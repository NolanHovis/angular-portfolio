import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NetlifyForm } from './netlify-form.model';

@Injectable({
  providedIn: 'root',
})
export class NetlifyFormService {
  constructor(private http: HttpClient) {}

  submitContactForm(contactEntry: NetlifyForm): Observable<any> {
    const entry = new HttpParams({
      fromObject: {
        'form-name': 'contactForm',
        ...contactEntry,
      },
    });
    return this.submitEntry(entry);
  }

  submitEntry(entry: HttpParams): Observable<any> {
    debugger;
    return this.http
      .post('/', entry.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        responseType: 'text',
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errMsg = '';

    if (err.error instanceof ErrorEvent) {
      errMsg = `A client-side error occurred: ${err.error.message}`;
    } else {
      errMsg = `A server-side error occurred. Code: ${err.status}. Message: ${err.message}`;
    }

    return throwError(errMsg);
  }
}
