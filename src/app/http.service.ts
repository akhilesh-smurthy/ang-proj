import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IPost } from './ApiDemo/ipost';
import { Router } from '@angular/router';
import { IUser } from './Pages/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  //APIURL= 'https://jsonplaceholder.typicode.com/posts'
  APIURL = 'http://localhost:3000/posts'
  USERAPIURL = 'http://localhost:3000/users'

  constructor(private http:HttpClient, private router:Router) { }

  //GET:http://localhost:3000/posts
  getPostDetails():Observable<IPost[]>{
    return this.http.get<IPost[]>(this.APIURL)
  }

  //GET:http://localhost:3000/posts
  getPostDetailsById(id:string|null):Observable<IPost>{
    return this.http.get<IPost>(
      `${this.APIURL}/${id}`
    )
  }

  //POST: http://localhost:3000/posts + data + header
  createNewRecord(postdata:IPost):Observable<IPost>{
    return this.http.post<IPost>(
      this.APIURL,
      postdata,
      {
        headers: new HttpHeaders({'content-type':'application/json'})
      }
    )
  }

  //PUT: http://localhost:3000/posts + data + header
  updateRecord(postdata:IPost):Observable<IPost>{
    return this.http.put<IPost>(
      `${this.APIURL}/${postdata.id}`,
      postdata,
      {
        headers: new HttpHeaders({
          'content-type':'application/json'
        })
      }      
    )
  }

  //DELETE: http://localhost:3000/posts + header
  deleteRecord(postId:number):Observable<IPost>{
    return this.http.delete<IPost>(
      `${this.APIURL}/${postId}`,
      {
        headers: new HttpHeaders({'content-type':'application/json'})
      }
    )
  }

  isUserLoggedIn(){
    return sessionStorage.getItem('role')
  }

  logoutProcess(){
    sessionStorage.removeItem('role')
    alert('Logout sucessfull')
    this.router.navigate(['/login'])
  }

  //GET: 'http://localhost:3000/users'
  getUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>(this.USERAPIURL)
  }

  checkUserRole(){
    return sessionStorage.getItem('role')
  }

}
