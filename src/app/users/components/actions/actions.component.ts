import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUSer } from '../../User';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent implements OnInit {
  @Output() onDeleteUsers: EventEmitter<any> = new EventEmitter();
  @Output() onSortAscending: EventEmitter<string> = new EventEmitter();
  @Output() onSortDescending: EventEmitter<string> = new EventEmitter();
  @Output() onSelectAllUsers: EventEmitter<any> = new EventEmitter();

  constructor() {}

  selectedAll: boolean = false;

  onSelectAll() {
    this.selectedAll = !this.selectedAll;
    this.onSelectAllUsers.emit(this.selectedAll);
  }

  onDelete() {
    this.onDeleteUsers.emit();
    console.log('Deleted Users');
  }

  onSort(how: string) {
    switch (how) {
      case 'ASC':
        this.onSortAscending.emit(how);
        break;
      case 'DESC':
        this.onSortDescending.emit(how);
        break;
    }
    console.log('Sorted ' + how);
  }

  ngOnInit(): void {}
}
