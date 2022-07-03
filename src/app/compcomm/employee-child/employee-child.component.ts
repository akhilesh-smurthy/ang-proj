import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-child',
  templateUrl: './employee-child.component.html',
  styleUrls: ['./employee-child.component.css']
})
export class EmployeeChildComponent implements OnInit {

@Input() AllCount =0
@Input() MaleCount =0
@Input() FemaleCount =0

@Output() genderEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  genderchanged(gender:string)
  {
    console.log(gender)
    this.genderEvent.emit(gender)
  }
}
