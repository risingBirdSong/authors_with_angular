import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewAuthorComponentComponent } from "./new-author-component/new-author-component.component";
import {MyHomeComponentComponent} from "../app/my-home-component/my-home-component.component";
import {EditComponent} from "./edit/edit.component";

const routes: Routes = [
  {path : "new", component : NewAuthorComponentComponent},
  {path : "edit/:id", component : EditComponent},
  {path : "home", component : MyHomeComponentComponent},
  {path : "", pathMatch : "full", redirectTo : "/home"}
  // { path: '/:id', component:  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
