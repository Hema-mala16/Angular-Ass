import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DetailsComponent } from './details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppNewWeightEntryComponent } from './app-new-weight-entry.component';




@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    AppNewWeightEntryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
