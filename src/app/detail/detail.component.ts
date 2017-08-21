import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }           from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { ProductService }     from '../service/product.service';


@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  product = [];
  enableEditing = false;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,

  ) {};

  ngOnInit(): void {
  this.route.paramMap
    .switchMap((params: ParamMap) =>
    this.productService.getDetail(params.get('name')))
    .subscribe(res =>this.product = res);

  }
  editProd(prod) {
    console.log(prod);
    this.productService.editProd(prod).subscribe(
      res =>{
        this.product = prod
        this.edit()
      }
    )
      error => console.log(error)
  }
  edit(){
    this.enableEditing = !this.enableEditing;
  }
}
