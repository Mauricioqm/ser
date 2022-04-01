import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL: string = '/api/Producto';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }

  getProductsbyID(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + id);
  }

  deleteProducts(id: number){
    return this.httpClient.delete(this.baseURL + id);
  }
}
