import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ProductService } from '../service/product.service';

@Component({
  selector: 'new-prod',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit{
  product= [];

  addProdForm: FormGroup;
  name = new FormControl('', Validators.required);
  type = new FormControl('', Validators.required);
  price = new FormControl('', Validators.required);
  img = new FormControl('', Validators.required);
  cpu = new FormControl('', Validators.required);
  gpu = new FormControl('', Validators.required);
  os = new FormControl('', Validators.required);
  hdd = new FormControl('', Validators.required);
  ram = new FormControl('', Validators.required);





  constructor(private prodService: ProductService,
              private formBuilder: FormBuilder,
              private http: Http) { }

  ngOnInit(){
    this.addProdForm = this.formBuilder.group({
      name: this.name,
      type: this.type,
      price: this.price,
      img: this.img,
      cpu: this.cpu,
      gpu: this.gpu,
      os: this.os,
      hdd: this.os,
      ram: this.ram

    });
  }

  addProd() {
    console.log(this.addProdForm.value);
    this.prodService.addProd(this.addProdForm.value).subscribe(
      res => {
        const newProduct = res.json();
        this.product.push(newProduct);
        this.addProdForm.reset();
      },
      error => console.log(error)
    );
  }
}
