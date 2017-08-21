import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent }       from './about/about.component';
import { ListComponent }        from './list/list.component';
import { DetailComponent }      from './detail/detail.component';
import { NewComponent }         from './new/new.component';
import { FilterComponent }     from './filter/filter.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: AboutComponent },
  { path: 'products', component: ListComponent},
  { path: 'prod/:name', component: DetailComponent },
  { path: 'new', component: NewComponent },
  { path: 'filter/:type', component: FilterComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
