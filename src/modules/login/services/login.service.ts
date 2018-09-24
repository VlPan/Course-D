import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

    constructor(private http: HttpClient) {}
    loginUser(email: string, password: string): Observable<any> {
      return this.http
        .get<any>(`http://localhost:3000/login`)
        .pipe(
          catchError((error: any) => Observable.throw(error.json()))
        );
    }
}
