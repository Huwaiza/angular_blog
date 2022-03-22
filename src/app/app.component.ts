import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'M Huwaiza Tahir';
  message = "My message to world is, I won't quit"
  
  testimonials(){
    return "Testimonials will be provided upon demand"
  }

  obj = {
    'job_title': "Senior Python Developer",
    'learn': "I want to learn Angular"
  }

  arr = ['harvey spector', 'donna', 'mike ross', 'luis litt', 'danial hardmen', 'jessica pearson', 'rachel zane', 'travis scot']
  siteUrl = window.location.href

  getName(name="huwaiza tahir"){
    alert(name)
  }

  myEvent(event: Event){
    console.warn((event.target as HTMLInputElement).value);    
  }
}
