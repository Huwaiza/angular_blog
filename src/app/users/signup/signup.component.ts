import { Component, OnInit } from '@angular/core';
import { Form, FormArray } from '@angular/forms';
import { Data } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signupUser(form: object){
    const jsonValue = JSON.stringify(form);
    const valueFromJson = JSON.parse(jsonValue);
    console.log(valueFromJson.email)
  }

}
