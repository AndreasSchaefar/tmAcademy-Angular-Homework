import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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
}
