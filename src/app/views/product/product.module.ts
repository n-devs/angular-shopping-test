import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductView } from './product.view';
import { ProductHomeView } from './product-home/product-home.view';
import { ProductDetailView } from './product-detail/product-detail.view';

@NgModule({
  declarations: [
    ProductView,
    ProductDetailView,
    ProductHomeView
  ],
  imports: [
    RouterModule
  ]
})
export class ProductViewModule { }
