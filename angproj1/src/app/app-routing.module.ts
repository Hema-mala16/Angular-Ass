import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './home/details.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'community',component:CommunityComponent},
      {path:'home', component:HomeComponent},
      {path: 'home/:id', component: DetailsComponent},
      {path:'**',redirectTo:'home',pathMatch:'full'}
    ]),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
