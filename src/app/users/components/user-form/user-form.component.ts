import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUSer } from '../../User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;

  @Output() onSubmitNewUser: EventEmitter<IUSer> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          this.noWhitespaceValidator,
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(60),
          this.noWhitespaceValidator,
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.email, this.noWhitespaceValidator],
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('[0-9]+'),
          this.noWhitespaceValidator,
        ],
      ],
    });
  }

  public noWhitespaceValidator(control: FormGroup) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  onSubmit() {
    this.onSubmitNewUser.emit(<IUSer>{
      name: this.firstName?.value + ' ' + this.lastName?.value,
      email: this.email?.value,
      phone: this.phone?.value,
    });
    this.userForm.reset();
  }

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get email() {
    return this.userForm.get('email');
  }

  get phone() {
    return this.userForm.get('phone');
  }
}
