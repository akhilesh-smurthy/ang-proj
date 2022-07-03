import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents() {
    return [
      {Id:101, FirstName:'PETER',LastName:'PARKER',Gender:'Male'},
      {Id:102, FirstName:'JASMINE',LastName:'PARKER',Gender:'Female'},
      {Id:103, FirstName:'CHARLIE',LastName:'PARKER',Gender:'Female'},
      {Id:104, FirstName:'LOUIS',LastName:'PARKER',Gender:'Male'}
    ]
  }
}
