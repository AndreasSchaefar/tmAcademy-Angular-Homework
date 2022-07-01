import { Component, OnInit } from '@angular/core';
import { IUSer } from '../../User';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: IUSer[] = [];
  selectedAll: boolean = false;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => (this.users = users));
  }

  onCreateNewUser(user: IUSer) {
    this.usersService
      .createUser({
        id: Math.max(...(<number[]>this.users.map((u) => u.id))) + 1,
        ...user,
      })
      .subscribe(() => this.users.push(user));
  }

  onSelectAll(selectedAll: boolean) {
    this.users = this.users.map((u) => {
      u.select = selectedAll;
      return u;
    });
  }

  checkIfAnySelected(): boolean {
    return !this.users.some((u) => u.select);
  }

  onDelete() {
    this.users
      .filter((u) => u.select)
      .forEach((u) =>
        this.usersService
          .deleteUser(u)
          .subscribe(
            () => (this.users = this.users.filter((user) => user.id !== u.id))
          )
      );
  }

  onSelect(user: IUSer) {
    this.users = this.users.map((u) => {
      if (u.id === user.id) {
        u.select = !Boolean(user.select);
        return u;
      }
      return u;
    });
  }

  onSortUsers(how: string) {
    switch (how) {
      case 'ASC':
        this.users.sort(this.compareName);
        break;
      case 'DESC':
        this.users.sort(this.compareName).reverse();
    }
  }

  onSearchUser(query: string) {
    if (!query) {
      this.usersService.getUsers().subscribe((users) => (this.users = users));
    } else {
      this.usersService.getUsers().subscribe((users) => {
        this.users = users.filter((u) => {
          const userName = u.name.toLowerCase();
          return userName.includes(query);
        });
      });
    }
  }

  compareName(a: IUSer, b: IUSer) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    }
    return 0;
  }
}
