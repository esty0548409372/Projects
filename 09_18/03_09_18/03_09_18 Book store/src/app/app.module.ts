import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './components/logout/logout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from './shard/models/user';
import { AuthenticationService } from './shard/services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'myCart', component: CartComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'account', component: AccountComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'logout', component: LogoutComponent },
      // { path: 'logout', component:LoginComponent },
    ]
  },
  {path:'productsDetails',component:ProductsDetailsComponent},
  {path:'productPreview',component:ProductPreviewComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    CartComponent,
    LogoutComponent,
    ProductPreviewComponent,


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ AuthenticationService,User],
  bootstrap: [AppComponent]
})
export class AppModule { }
