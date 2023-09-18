import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { StoreService } from 'src/app/services/store.service';
import { DATABASE } from "../../database/products-database";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private storeService: StoreService){}

  ngOnInit():void {
    this.loadProducts();
  }

  loadProducts():void {
    this.storeService.getAllProducts().subscribe((products) =>{
      this.products = products;
    });
  }

  pushToCart(product: Product){
    return this.storeService.pushProduct(product);
  }


}
