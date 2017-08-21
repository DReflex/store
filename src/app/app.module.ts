import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './routing.module';

import { ProductService } from './service/product.service'

import { AppComponent } from './nav/app.component';
import { AboutComponent } from './about/about.component';
import { ListComponent }  from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { NewComponent }    from './new/new.component';
import { FilterComponent } from './filter/filter.component'


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ListComponent,
    DetailComponent,
    NewComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
