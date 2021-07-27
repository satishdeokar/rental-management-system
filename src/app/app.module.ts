import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { DashboradComponent } from './dashborad/dashborad.component';
import { CategoryComponent } from './category/category.component';
import { CategorydetailsComponent } from './category/categorydetails/categorydetails.component';
import { HttpClientModule } from '@angular/common/http';
import { NestedmenuComponent } from './nestedmenu/nestedmenu.component';
import { LocationbranchesComponent } from './locationbranches/locationbranches.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboradComponent,
    CategoryComponent,
    CategorydetailsComponent,
    NestedmenuComponent,
    LocationbranchesComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
