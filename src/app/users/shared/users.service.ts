import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

import { IUSer } from '../User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUSer[]> {
    return this.http.get<IUSer[]>(this.apiUrl);
  }

  deleteUser(user: IUSer): Observable<IUSer[]> {
    return this.http.delete<IUSer[]>(this.apiUrl + '/' + user.id);
  }

  createUser(user: IUSer): Observable<IUSer[]> {
    return this.http.post<IUSer[]>(this.apiUrl + '/' + user.id, user).pipe(
      catchError(() => {
        console.log(`The user ${user.name} was posted to ${this.apiUrl}`);
        return of(<IUSer[]>[]);
      })
    );
  }
}
