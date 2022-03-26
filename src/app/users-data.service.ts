import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http: HttpClient) {


  }

  getUsersData(){
    let url = "http://jsonplaceholder.typicode.com/todos/"
    return this.http.get(url)
  }
}
