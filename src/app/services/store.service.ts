import { Injectable } from '@angular/core';
import { BehaviorSubject, find, Observable, of } from 'rxjs';
import { DATABASE } from "../database/products-database";
import { DB } from '../interfaces/database';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  //Crear Lista Renderizada por el Carrito
  private cartListProducts: Product[] = [];

  //Carrito Lista Observable
  private myCartList = new BehaviorSubject<Product[]>([]);
  myCartList$ = this.myCartList.asObservable();

  private db: DB = DATABASE;

  constructor() { }

  ///Obtener Información de Database
  getAllProducts(): Observable<Product[]> {
    return of (this.db.products);
  }

  //Agregar Productos a la Lista del Carrito
  pushProduct(product: Product){
    const currentCart = this.myCartList.value;
    const findProduct = currentCart.find((element) => element.id === product.id);
    if (findProduct){
      findProduct.quantity += 1;
    }else{
      product.quantity = 1;
      currentCart.push(product);
    }
    this.myCartList.next(currentCart);
  }

  clearCart(){
    this.myCartList.next([])

  }

}


