import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';

//React için axios,fetch ile @angular daki httpclient ın aynı işlemini yapıyor
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded=false;
  apiUrl = 'https://localhost:44350/api/products/getall';
  // productResponseModel: ProductResponseModel = {
  //   data: this.products,
  //   message: '',
  //   success: true,
  // };
  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    // console.log('Init Calisti');
    this.getProducts();
  }

  getProducts() {
    // console.log("Api REquest Basladi")
    this.productService.getProducts().subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true;
    })
    // console.log("Request Bitti");
  }
  // console.log("Metod Bitti");
}
