import { Component, OnInit } from '@angular/core';
import { ProductService } from './../service/product.service';
import { Http } from '@angular/http'
import { CurrencyPipe } from '@angular/common';



@Component({
  selector: 'all-products',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class ListComponent implements OnInit {
  products= [];
  constructor(
    private productService: ProductService,
    private http: Http
   ) {}
  ngOnInit(){
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      data => this.products = data,
      error => console.log(error),
      () => console.log(this.products)

    );
  }
  //delete and refresh
  deleteProduct(product){
    if(window.confirm("Are you sure you want to permanently delete this product?")){
      this.productService.prodDelete(product).subscribe(
      res =>{ const pos = this.products.map(elem => elem._id).indexOf(product._id);
              this.products.splice(pos, 1);
            },
      error => console.log(error)
      );
    }
  }

}
