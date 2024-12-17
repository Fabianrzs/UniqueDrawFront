import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ProductCreateDTO} from "../Models/Create/product-create.model";
import {ProductResponseDTO} from "../Models/Response/product-response.model";

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl = 'api/Products';

  constructor(private http: HttpClient) {}

  createProduct(request: ProductCreateDTO): Observable<ProductResponseDTO> {
    return this.http.post<ProductResponseDTO>(`${this.baseUrl}`, request);
  }

  getProductsByClient(clientId: string): Observable<ProductResponseDTO[]> {
    return this.http.get<ProductResponseDTO[]>(`${this.baseUrl}/${clientId}`);
  }
}
