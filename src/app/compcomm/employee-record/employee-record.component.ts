import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-record',
  templateUrl: './employee-record.component.html',
  styleUrls: ['./employee-record.component.css']
})
export class EmployeeRecordComponent implements OnInit {

dob=new Date()
salary=5000
genderFilter=''
searchValue=''

employees=[
  {name:'PETER', age:20, gender:'male', country:'India'},
  {name:'PARKER', age:20, gender:'male',country:'India'},
  {name:'ROSE', age:20, gender:'female',country:'India'},
  {name:'JASMINE', age:20, gender:'female',country:'India'},
]
  constructor() { }

  ngOnInit(): void {
  }

  getAllEmp(){
    return this.employees.length
  }

  getMaleEmp(){
    return this.employees.filter(e => e.gender=='male').length
  }

  getFemaleEmp(){
    return this.employees.filter(e => e.gender=='female').length
  }

  filterEmp(gender:string){
    //console.log(gender)
    this.genderFilter = gender
  }

  getEmployees(){
    if(this.genderFilter == 'All' || this.genderFilter == '')
      return this.employees
    else 
      return this.employees.filter(e => e.gender == this.genderFilter)
  }

  addUser(){
    this.employees.push({name:'ROHAN', age:20, gender:'male', country:'India'})
  }
}
