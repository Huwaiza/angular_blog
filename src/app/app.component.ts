import { Component } from '@angular/core';
import { UsersDataService } from './users-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = [];
  
  constructor(private user:UsersDataService){
    this.user.getUsersData().subscribe(apiData => {
      const jsonValue = JSON.stringify(apiData);
      const valueFromJson = JSON.parse(jsonValue);
      this.data = valueFromJson
    })
  }
  
  title = 'M Huwaiza Tahir';
  message = "My message to world is, I won't quit"
  keyUpString = ""
  name = "huwaiza .................."  
  testimonials(){
    return "Testimonials will be provided upon demand"
  }

  obj = {
    'job_title': "Senior Python Developer",
    'learn': "I want to learn Angular"
  }

  arr_obj = [
    {
      'job_title': "Senior Python Developer",
      'learn': "I want to learn Angular"
    },
    {
      'job_title': "Senior Python Developer",
      'learn': "I want to learn Angular"
    },
    {
      'job_title': "Senior Python Developer",
      'learn': "I want to learn Angular"
    },
    {
      'job_title': "Senior Python Developer",
      'learn': "I want to learn Angular"
    }
  ]

  arr = ['harvey spector', 'donna', 'mike ross', 'luis litt', 'danial hardmen', 'jessica pearson', 'rachel zane', 'travis scot']
  siteUrl = window.location.href

  getName(name="huwaiza tahir"){
    this.name = name
    alert(name)
  }

  myEvent(event: Event){
    this.keyUpString = (event.target as HTMLInputElement).value 
    console.warn(this.keyUpString);    
  }

  disabledInput = true
  enableInput(){
    this.disabledInput = false
  }

  ifShow = false

  parentComponent(someStr: String){
      console.log(someStr)
  }

  today = Date.now()

  pkr = 100
}
