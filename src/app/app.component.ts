import { Component } from '@angular/core';
import { UserObject } from './model/UserObject';
import { DataService } from './shared/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  college_name = 'George Brown College';
  city = "Toronto";
  isDisplay = true;
  user?: UserObject

  constructor(private dataService: DataService){
    this.dataService.getUserById_MODEL(1).subscribe(user => {
      console.log(user.data)
      this.user = user
    })
  }

  btnGetUserClick(){
    this.getUserData()
  }

  getUserData(){
    this.dataService.getAllUserData().subscribe(response => {
      console.log(response)
    })
  }

  btnUserDataById(){
    this.dataService.getUserById(2).subscribe(response => {
      console.log(response)
    })
  }
}
