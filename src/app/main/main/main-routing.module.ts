import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main.component';

const routes: Routes = [
  {path:"home", component:MainComponent, pathMatch:"full"},
  {path:"", redirectTo:"/home", pathMatch:"full"}
];
export const mainroute = [MainComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
