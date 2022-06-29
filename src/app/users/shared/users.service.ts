import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IUSer } from '../User';
import { USERS } from '../mock-users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  getUsers(): Observable<IUSer[]> {
    const users = of(USERS);
    return users;
  }

  /*  TODO  */
  // deleteUsers(users: IUSer[]): Observable<IUSer[]> {}
  /*  TODO  */
  // sortUsers(how: string): Observable<IUSer[]> {}
}
