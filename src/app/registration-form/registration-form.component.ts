import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent {
  fullname: string;
  emailAddress: string;
  jobPosition: String = "";
  pass: string;
  genderType: string;
  isConfirmed: boolean;
  @ViewChild('registrationForm') form: NgForm;
  onSubmit() {
    console.log(this.form);
    console.log('Form submitted!!');
  }
}
