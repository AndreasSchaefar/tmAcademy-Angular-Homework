import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

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
  @Output() onSearchUsers: EventEmitter<string> = new EventEmitter();
  @Input() selectedAny?: boolean;

  constructor() {}

  selectedAll: boolean = false;
  searchUser: string = '';
  selectedSorting: 'ASC' | 'DESC' | 'No sorting' = 'No sorting';

  onSearch() {
    this.onSearchUsers.emit(this.searchUser);
  }

  onSelectAll() {
    this.selectedAll = !this.selectedAll;
    this.onSelectAllUsers.emit(this.selectedAll);
  }

  onDelete() {
    this.onDeleteUsers.emit();
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
  }

  ngOnInit(): void {}
}
