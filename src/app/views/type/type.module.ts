import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TypeView } from './type.view';
import { TypeHomeView } from './type-home/type-home.view';
import { TypeDetailView } from './type-detail/type-detail.view';

@NgModule({
  declarations: [
    TypeView,
    TypeDetailView,
    TypeHomeView
  ],
  imports: [
    RouterModule
  ]
})
export class TypeViewModule { }
