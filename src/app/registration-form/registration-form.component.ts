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
  selectedGender: string;
  defaultGender = "Male";
  genderType = [
    {id: "1", value: "Male"},
    {id: "2", value: "Female"}
  ];
  isConfirmed: boolean;
  @ViewChild('registrationForm') form: NgForm;
  onSubmit() {
    this.fullname = this.form.value.name;
    this.emailAddress = this.form.value.email;
    this.jobPosition = this.form.value.position;
    this.pass = this.form.value.password;
    this.selectedGender = this.form.value.genderTypeDetails.gender;
    this.isConfirmed = this.form.value.confirmation;
    console.log(this.form)
    this.form.reset();
    console.log('Form submitted!!');
  }
}
