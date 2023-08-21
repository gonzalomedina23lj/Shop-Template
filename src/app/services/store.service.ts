import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DATABASE } from "../database/products-database";
import { DB } from '../interfaces/database';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  private db: DB = DATABASE;

  constructor() { }

  getAllProducts(): Observable<Product[]> {
    return of (this.db.products);
  }

}


