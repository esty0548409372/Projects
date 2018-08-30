import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponentComponent } from './home-component/home-component.component';
import { CountriesComponentComponent } from './countries-component/countries-component.component';
import { HomeComponent } from './home/home.component';
import { MyServiceService } from './services/my-service.service';
import { HttpClientModule} from '@angular/common/http';
import { MyPipePipe } from './services/my-pipe.pipe';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  { path: 'Lands', component: HomeComponent },
  {
    path: 'Lands/app', component: HomeComponent, children: [
      { path: 'Lands/countries', component: CountriesComponentComponent },
      { path: 'Lands/home', component: HomeComponentComponent },
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    CountriesComponentComponent,
    HomeComponent,
    MyPipePipe,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    


  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]

})
export class AppModule { }

