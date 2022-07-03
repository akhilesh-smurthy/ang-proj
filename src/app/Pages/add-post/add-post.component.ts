import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  userGroup:FormGroup=new FormGroup({})

  constructor(private httpService:HttpService, private router:Router) { }

  ngOnInit(): void {
    this.userGroup = new FormGroup({
      id:new FormControl(),
      title:new FormControl(),
      body:new FormControl()
    }
    )
  }
  saveData(){
    this.httpService.createNewRecord(this.userGroup.value).subscribe(
      ()=>{
        alert('Data inserted successfully')
        this.router.navigate(['/post'])
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
