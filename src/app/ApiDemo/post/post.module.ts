import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { AddPostComponent } from 'src/app/Pages/add-post/add-post.component';
import { EditPostComponent } from 'src/app/Pages/edit-post/edit-post.component';
import { DetailPostComponent } from 'src/app/Pages/detail-post/detail-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [  
    PostComponent,
    AddPostComponent,
    EditPostComponent,
    DetailPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
