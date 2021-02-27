import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Route[]= [
  {path:'', component: WelcomeComponent},
  {path:'welcome', component: WelcomeComponent},
  {path:'home', component: HomeComponent},
  {path:'form', component: FormComponent},
  {path:'form/:id', component: FormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
