import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateChildAuthGuard } from './activate-child-auth.guard';
import { PostComponent } from './ApiDemo/post/post.component';
import { AuthGuard } from './auth.guard';
import { DeActivateAuthGuard } from './de-activate-auth.guard';
import { AddPostComponent } from './Pages/add-post/add-post.component';
import { DetailPostComponent } from './Pages/detail-post/detail-post.component';
import { EditPostComponent } from './Pages/edit-post/edit-post.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { ResolverService } from './resolver.service';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'post',component:PostComponent, resolve:{allposts:ResolverService},
    canActivate:[AuthGuard], canActivateChild:[ActivateChildAuthGuard],
    children:[
      {path:'addpost',component:AddPostComponent},
      {path:"edit/:id",component:EditPostComponent},
      {path:"detail/:id",component:DetailPostComponent}
    ]},
    {path:'login', component:LoginComponent, canDeactivate:[DeActivateAuthGuard]},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
