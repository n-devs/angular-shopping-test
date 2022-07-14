import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundView } from './views/not-found/not-found.view';
import { DashBoardView } from './views/dashboard/dashboard.view';
import { CategoryView } from './views/category/category.view';
import { CollectionView } from './views/collection/collection.view';
import { LoginView } from './views/login/login.view';
import { ProductView } from './views/product/product.view';
import { RegisterView } from './views/register/register.view';
import { TypeView } from './views/type/type.view';
import { TypeHomeView } from './views/type/type-home/type-home.view';
import { TypeDetailView } from './views/type/type-detail/type-detail.view';
import { ProductHomeView } from './views/product/product-home/product-home.view';
import { ProductDetailView } from './views/product/product-detail/product-detail.view';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashBoardView,
    children: []
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashBoardView,
    children: []
  },
  {
    path: 'category',
    pathMatch: 'full',
    component: CategoryView,
    children: []
  },
  {
    path: 'collection',
    pathMatch: 'full',
    component: CollectionView,
    children: []
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginView,
    children: []
  },
  {
    path: 'product',
    component: ProductView,
    children: [{
      path: '',
      component: ProductHomeView,
      pathMatch: 'full'
    },
    {
      path: ':id',
      component: ProductDetailView
    }]
  },
  {
    path: 'register',
    pathMatch: 'full',
    component: RegisterView,
    children: []
  },
  {
    path: 'type',
    component: TypeView,
    children: [{
      path: '',
      component: TypeHomeView,
      pathMatch: 'full'
    },
    {
      path: ':id',
      component: TypeDetailView
    }]
  },
  {
    path: '**',
    component: NotFoundView,
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
