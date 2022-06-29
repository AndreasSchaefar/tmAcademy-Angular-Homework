import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUSer } from '../../User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() user!: IUSer;
  @Output() onSelectUser: EventEmitter<IUSer> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSelect(user: IUSer) {
    this.onSelectUser.emit(user);
  }
}
