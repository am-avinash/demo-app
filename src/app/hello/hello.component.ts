import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  color = "red";


  courseName:String = 'Typescript';

   changeCourse(){
    this.courseName = "Angular";
   }

   newChangeCourse(course:string){
    this.courseName= course;
   }

   

   name:String ="Angular";

   username:String ="";
   password:String ="";
   loginSuccess=false;
   loginFailed=false;

   login(){
    this.loginSuccess=this.loginFailed=false;
    if(this.username == "admin" && this.password == "admin123"){
      this.loginSuccess=true;
    }else{
      this.loginFailed =true;
    }
   }

}
