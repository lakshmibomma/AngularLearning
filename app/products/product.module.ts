import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { ProductListComponent }  from './product-list.component';
import { ProductDetailComponent }  from './product-detail.component';
import { ProductFilterPipe }  from './product-filter.pipe';
import { StarComponent }  from '../shared/star.component';
import { ProductDetailGuard }  from './product-guard.service';
import {ProductService} from './product.service'

@NgModule({
imports: [
         FormsModule,
         CommonModule,
         RouterModule.forChild([
               {path: 'products',component:ProductListComponent},
               {path: 'product/:id',
               canActivate:[ProductDetailGuard], 
               component:ProductDetailComponent}
         ])
  ],
declarations: [
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,ProductDetailComponent
  ],
  providers:[ProductService,ProductDetailGuard]
})
export class ProductModule
{

}