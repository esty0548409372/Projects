import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateId, ValidateCountry } from '../shared/validations/validationForm';
import { UserService } from '../shared/services/user/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  registerForm = new FormGroup({
    id: new FormControl('', ValidateId),
    age: new FormControl(''),
    name: new FormControl(''),
    isMale: new FormControl(''),
    country: new FormControl('', ValidateCountry)
  });

  get id() {
    return this.registerForm.get("id");
  }
  get age() {
    return this.registerForm.get("age");
  }
  get name() {
    return this.registerForm.get("name");
  }
  get isMale() {
    return this.registerForm.get("isMale");
  }
  get country() {
    return this.registerForm.get("country");
  }
  onSubmit() {
    this.user =JSON.parse(JSON.stringify(this.registerForm.value));
    console.log(this.user);
    this.userService.addPerson(this.user);

  }


}
