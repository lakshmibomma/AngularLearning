import { NgModule } from 'angular2/core';
import { BrowserModule } from 'angular2/platform/browser';

import { AppComponent }  from './app.component';
import { ProductListComponent }  from './product-list.component';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ,
  ProductListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 

}
