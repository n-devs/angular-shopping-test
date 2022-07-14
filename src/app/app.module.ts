import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundView } from './views/not-found/not-found.view';
import { DashBoardView } from './views/dashboard/dashboard.view';
import { CategoryView } from './views/category/category.view';
import { CollectionView } from './views/collection/collection.view';
// import { LoginView } from './views/login/login.view';
import { RegisterView } from './views/register/register.view';
import { TypeViewModule } from './views/type/type.module';
import { ProductViewModule } from './views/product/product.module';
import { LoginViewModule } from './views/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardView,
    NotFoundView,
    CategoryView,
    CollectionView,
    // LoginView,
    RegisterView
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TypeViewModule,
    ProductViewModule,
    LoginViewModule
  ],
  providers: [NotFoundView],
  bootstrap: [AppComponent]
})
export class AppModule { }
