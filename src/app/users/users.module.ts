import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { ActionsComponent } from './components/actions/actions.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [UsersComponent, ActionsComponent, UserCardComponent],
  imports: [CommonModule],
  exports: [UsersComponent, ActionsComponent],
})
export class UsersModule {}
