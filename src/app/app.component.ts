import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'ReactiveForm';

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.userForm.get('notification')?.valueChanges.subscribe((changeValue) => {
      const phoneNo = this.userForm.get('phoneNo');
      if (changeValue) {
        this.phoneNo?.setValidators(Validators.required);
      } else {
        this.phoneNo?.clearValidators();
      }

      phoneNo?.updateValueAndValidity();
    });
  }
  userForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    phoneNo: [''],
    notification: [true],
  });

  get name() {
    return this.userForm.get('name');
  }
  get email() {
    return this.userForm.get('email');
  }
  get phoneNo() {
    return this.userForm.get('phoneNo');
  }
  get notification() {
    return this.userForm.get('notifiction');
  }

  //individual form controls

  //   constructor(private fb:FormBuilder){}
  //   myForm=this.fb.group({
  //     name:new FormControl(''),//initial value is empty
  //   email:new FormControl(''),
  //   city:new FormControl('')

  //   })
  //   addData(){
  // console.log(this.myForm.value);
  //   }
}
