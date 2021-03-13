import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
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

  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true;
    })
  }
}
