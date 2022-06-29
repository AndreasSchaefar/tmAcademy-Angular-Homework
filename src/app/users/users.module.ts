import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { ActionsComponent } from './components/actions/actions.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [UsersComponent, ActionsComponent, UserCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
  ],
  exports: [UsersComponent, ActionsComponent],
})
export class UsersModule {}
