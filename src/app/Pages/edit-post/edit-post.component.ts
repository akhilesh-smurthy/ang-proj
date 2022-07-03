import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  id:string | null = null

  postFormGroup:FormGroup = new FormGroup({})

  constructor(private activatedRoute:ActivatedRoute, 
              private http:HttpService,
              private router:Router
              ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
        params => {
          this.id = params.get('id')
        }
    )

    this.postFormGroup=new FormGroup({
      id:new FormControl(),
      title:new FormControl(),
      body:new FormControl()
    }
    )

    this.http.getPostDetailsById(this.id).subscribe(
      (response) => {
        this.postFormGroup.patchValue(response)
      }
    )
  }

  updateRecord(){
    this.http.updateRecord(this.postFormGroup.value).subscribe(
      () => {
        alert('Data update successfully')
        this.router.navigate(['/post'])
      },
      (error) =>
      {
        console.log(error.message)
      }
    )
  }

}
