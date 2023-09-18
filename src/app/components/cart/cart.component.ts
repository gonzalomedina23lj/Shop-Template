import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {

  myCartList$ = this.storeService.myCartList$;

  constructor(private storeService:StoreService) { }

  deleteProducts(){
    this.storeService.clearCart();
  }

  incQuant(product: Product){
    this.storeService.pushProduct(product);
  }

  decQuant(product: Product) {
    this.storeService.deleteProduct(product)

  }


}
