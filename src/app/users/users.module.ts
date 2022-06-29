import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { FormsModule } from '@angular/forms';
import { ActionsComponent } from './components/actions/actions.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [UsersComponent, ActionsComponent, UserCardComponent],
  imports: [CommonModule, FormsModule],
  exports: [UsersComponent, ActionsComponent],
})
export class UsersModule {}
