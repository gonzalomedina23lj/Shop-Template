import { Component } from '@angular/core';
import { DATABASE } from "../../database/products-database";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  products = DATABASE.products;

}
