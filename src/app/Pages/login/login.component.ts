import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { __asyncDelegator } from 'tslib';
import { IUser } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginGroup:FormGroup= new FormGroup({})
  users:IUser[] = []

  constructor(private router:Router, private httpService:HttpService) { }

  ngOnInit(): void {
    this.loginGroup = new FormGroup({
      username: new FormControl(),
      password:new FormControl()
    })

    this.httpService.getUsers().subscribe(
      (response) => {
        console.log(response)
        this.users = response
      },
      (error) => {
        console.log(error)
      }
    )
  }

  // //Login process validation through static data
  // loginProcess(){
  //   console.log(this.loginGroup.value)
  //   let un = this.loginGroup.value.username
  //   let pwd = this.loginGroup.value.password    

  //   if(un == "admin" && pwd == "admin")
  //   {
  //       sessionStorage.setItem('role','admin')
  //       this.router.navigate(['/post'])
  //   }
  //   else{
  //       alert('Username/Passord does not match')
  //   }
  // }

  //Login process validation through DB.json file
  loginProcess(){
    console.log(this.loginGroup.value)
    let un = this.loginGroup.value.username
    let pwd = this.loginGroup.value.password    

    let user = this.users.find(x => x.email == un)

    console.log(user)

    if(user)
    {
        if(user.password == pwd){
            // if(user.role == "admin"){
            //   sessionStorage.setItem('role','admin')
            //   this.router.navigate(['/post'])
            // }
            // else{
            //   alert("User is not Admin")
            // }

            sessionStorage.setItem('role',user.role)
            this.router.navigate(['/post'])
        }
        else{
          alert('Password does not match')
        }
    }
    else{
      alert('Users does not exist')
    }
  }

  canExit(){
    if(confirm("Are you sure to exit?")){
      return true
    }
    else {
      return false
    }
  }

}
