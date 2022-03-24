import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Form, FormArray } from '@angular/forms';
import { Data } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  @Input() p_name={};
  @Input() list_obj={};


  @Output() parentComponent: EventEmitter <any> = new EventEmitter();
  map = new Map([[2, 'foo'], [1, 'bar']]);

  constructor() { }

  ngOnInit(): void {
      this.parentComponent.emit("hello")
  }

  signupUser(form: object){
    const jsonValue = JSON.stringify(form);
    const valueFromJson = JSON.parse(jsonValue);
    console.log(valueFromJson.email)
  }

}
