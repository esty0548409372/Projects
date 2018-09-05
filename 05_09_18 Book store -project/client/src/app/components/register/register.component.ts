import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { User } from '../../shard/models/user';
import { UserService } from '../../shard/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  //----------------PROPERTIRS-------------------
  formGroup: FormGroup;
  obj: typeof Object = Object;
  newUser: User = new User();
  error = '';


  //----------------CONSTRUCTOR------------------
  constructor(private userService: UserService, private router: Router) {
    let formGroupConfig = {
      firstName: new FormControl("", this.createValidatorArr("firstName", 2, 15, /^[a-zA-Z]*$/)),
      lastName: new FormControl("", this.createValidatorArr("lastName", 3, 15, /^[a-zA-Z]*$/)),
      userName: new FormControl("", this.createValidatorArr("userName", 3, 15, /^[a-zA-Z]*$/)),
      userPassword: new FormControl("", this.createValidatorArr("password", 5, 10))
    };

    this.formGroup = new FormGroup(formGroupConfig);
  }

  //----------------METHODS-------------------
  submitRegister() {
    this.error = "";
    this.userService.addUser(this.formGroup.value).subscribe(
      data => {
        this.router.navigate(["/bookStore/account/login"]);
      }, err => {
        this.error = "please change your pass or user name,it's exist";
      }
    );
  }


  createValidatorArr(cntName: string, min: number, max: number, context?: RegExp): Array<ValidatorFn> {
    return [
      f => !f.value ? { "val": `${cntName} is required` } : null,
      f => f.value && f.value.length > max ? { "val": `${cntName} is max ${max} chars` } : null,
      f => f.value && f.value.length < min ? { "val": `${cntName} is min ${min} chars` } : null,
      f => f.value && !<String>f.value.match(context) ? { "val": `${cntName} is has to be with english letters` } : null
    ];
  }
}