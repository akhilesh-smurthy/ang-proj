import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  firstname:string='PETER'
  lastname='PARKER'
  isAdmin=true
  isDisabled = false
txtcolor='yellow'



  fullname():string{
    return '${this.firstname} ${this.lastname}'
  }

name = 'PETER'
age = '30'
country ='India'
salary = '10000'
status = false

  toggleButton(){
    return this.status = !this.status
  }

  pets = [
    {id:101, name:'CATY', type:'CAT', age:2},
    {id:102, name:'DOGY', type:'DOG', age:1},
    {id:103, name:'TURTLEY', type:'TURTLE', age:3}, 
  ]

  courses=[
    {name:'Angular', like:0, dislike:0},
    {name:'PHP', like:0, dislike:0},
    {name:'REACT', like:0, dislike:0},
    {name:'VUEJS', like:0, dislike:0},
  ]

  Like(c:any){
    c.like++
  }
Dislike(c:any){
  c.dislike++
}

handleClick(username:HTMLInputElement){
  console.log(username.value)
}


}
