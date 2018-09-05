import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { UserService } from '../../shard/services/user.service';
import { BookService } from '../../shard/services/book.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  obj: typeof Object = Object;
  isRegister: Boolean = false;

  constructor(private userService: UserService,
    private router: Router) {
    let formGroupConfig = {
      userName: new FormControl("", this.createValidatorArr("userName", 3, 15, /^[a-zA-Z]*$/)),
      userPassword: new FormControl("", this.createValidatorArr("password", 5, 10))
    };

    this.formGroup = new FormGroup(formGroupConfig);
  }

  ngOnInit() {
  }

  // convenience getter for easy access to form fields
  get f() { return this.formGroup.controls; }

  submitLogin() {
    // stop here if form is invalid
    if (!this.formGroup.invalid) {
      this.error = "";
      this.userService.login(this.formGroup.value)
        .subscribe(
          data => {
            localStorage.setItem('currentUser', JSON.stringify({ data }));
            this.userService.subjectMyCart.next();
            this.router.navigate(["/products"]);
          }, err => {
            this.error = "user name or password are not ok";
            this.isRegister = true;
          }
        );
    }
  }

  createValidatorArr(cntName: string, min: number, max: number, context?: RegExp): Array<ValidatorFn> {
    return [
      f => !f.value ? { "val": `${cntName} is required` } : null,
      f => f.value && f.value.length > max ? { "val": `${cntName} is max ${max} chars` } : null,
      f => f.value && f.value.length < min ? { "val": `${cntName} is min ${min} chars` } : null,
      f => f.value && !<String>f.value.match(context) ? { "val": `${cntName} must be english letters` } : null
    ];
  }
}



