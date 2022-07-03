import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/ApiDemo/ipost';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {

  id:string | null= null
  post:IPost|undefined
  
  constructor(private activatedRoute:ActivatedRoute, 
              private http:HttpService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.id = params.get('id')
      }
    )

    this.http.getPostDetailsById(this.id).subscribe(
      (response) => {
        this.post = response
      }
    )
  }

}
