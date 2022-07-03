import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormArray} from '@angular/forms'

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent implements OnInit {

  userForm:FormGroup = new FormGroup({})

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username:new FormControl(''),
      password:new FormControl(''),
      skills: new FormArray([
            new FormControl()
        ])
    })
  }

  onSubmit(){
    console.log(this.userForm.value)
  }

  get skills(){
     return this.userForm.get('skills') as FormArray
  }
  onAddSkill(){
    (<FormArray>this.userForm.get('skills')).push(new FormControl())
  }

  onRemoveSkill(index:number){
    (<FormArray>this.userForm.get('skills')).removeAt(index)
  }

}
