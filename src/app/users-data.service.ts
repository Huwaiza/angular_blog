import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor() { }

  getUsersData(){

    return{
      name: "huwaiza",
      age: 23,
      proffession: "software engineer"
    }
  }
}
