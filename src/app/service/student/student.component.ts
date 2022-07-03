import { Component, OnInit } from '@angular/core';
import { IStudent } from '../istudent';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student:IStudent[] = [];

  constructor(private stdService:StudentService) { } //dependency injection

  ngOnInit(): void { //Initialization
    this.student = this.stdService.getStudents()
  }

}
