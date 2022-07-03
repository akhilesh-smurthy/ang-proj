import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { IPost } from '../ipost';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:IPost[] = []
  userForm:FormGroup = new FormGroup({})
  showAddForm = false
  showEditForm = false
  isAdmin = false  

  constructor(private httpService:HttpService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // //Get the data through HTTP service but it may be slow if data fetching takes time 
    // //Check in Browser DEV tools => Network => Presets (Fast 3G or Slow 3G)
    // this.httpService.getPostDetails().subscribe(
    //   (response) =>{
    //     console.log(response)
    //     this.posts = response
    //   },
    //   (error)=>{
    //     console.log(error)
    //   }
    // )

    //Get the data using Resolve Guard
    this.posts = this.activatedRoute.snapshot.data['allposts']

    this.userForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      body:new FormControl()
    })

    if(this.httpService.isUserLoggedIn() === 'admin'){
      this.isAdmin = true
    }
  }

  onAddRecord(){
    this.showAddForm = !this.showAddForm
  }

  saveData(){
    console.log(this.userForm.value)
    this.httpService.createNewRecord(this.userForm.value).subscribe(
      () => {
        alert('Data added successfully')
        this.showAddForm = false
      },
      (error) => {
        console.log(error)
      }
    )
  }

  editRecord(post:IPost){
    this.showEditForm = !this.showEditForm
    this.userForm.patchValue(post)
  }

  deleteRecord(postId:number){
    if(confirm('Are you sure to delete the record?'))
    {
        this.httpService.deleteRecord(postId).subscribe(
          () => {
            alert('Data deleted successfully');
          },
          (error)=> {
            console.log(error)
          }
        )
    }
  }

  updateRecord(){
    this.httpService.updateRecord(this.userForm.value).subscribe(
      ()=> {
        alert('Data updated successfully')
        this.showEditForm = !this.showEditForm
      },
      (error) => {
        alert(error)
      }
    )
  }
}
