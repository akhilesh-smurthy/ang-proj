import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  message = 'Hi.. from parent!!'
  
  constructor() { }

  ngOnInit(): void {
  }

}
