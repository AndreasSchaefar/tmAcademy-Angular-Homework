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

  onSelectAll(selectedAll: boolean) {
    this.users = this.users.map((u) => {
      u.select = selectedAll;
      return u;
    });
  }

  onDelete() {
    this.users = this.users.filter((u) => !u.select);
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

  /* TODO (Send a delete request to database) */
  onDeleteUsers(usersToDelete: IUSer[]) {
    this.users = this.users.filter((u) =>
      usersToDelete.findIndex((ud) => ud.id === u.id)
    );
  }

  /* TODO (Send a sorting request to database) */
  onSortUsers(how: string) {
    switch (how) {
      case 'ASC':
        this.users.sort(this.compareName);
        break;
      case 'DESC':
        this.users.sort(this.compareName).reverse();
    }
    console.log(how, this.users);
  }

  onSearchUser(userName: string) {
    if (!userName) {
      this.usersService.getUsers().subscribe((users) => (this.users = users));
    } else {
      this.users = this.users.filter((u) => {
        return (u.firstname + ' ' + u.lastname)
          .toLowerCase()
          .includes(userName.toLowerCase());
      });
    }
  }

  compareName(a: IUSer, b: IUSer) {
    const nameA = (a.firstname + a.lastname).toUpperCase();
    const nameB = (b.firstname + b.lastname).toUpperCase();

    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    }
    return 0;
  }
}
