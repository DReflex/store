import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }           from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { ProductService }     from '../service/product.service';


@Component({
  selector: 'filter',
  templateUrl: 'filter.component.html'
})
export class FilterComponent implements OnInit{
  products = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,

  ) {};

  ngOnInit(): void {
  this.route.paramMap
    .switchMap((params: ParamMap) =>
    this.productService.getFilter(params.get('type')))
    .subscribe(res =>this.products = res);

  }


}
