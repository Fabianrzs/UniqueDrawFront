import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ClientResponseDTO} from "../Models/Response/client-response.model";
import {ClientLoginRequestDTO} from "../Models/Request/client-login-request.model";
import {ClientCreateDTO} from "../Models/Create/client-create.model";

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private baseUrl = 'api/Client';

  constructor(private http: HttpClient) {}

  createClient(request: ClientCreateDTO): Observable<ClientResponseDTO> {
    return this.http.post<ClientResponseDTO>(`${this.baseUrl}`, request);
  }

  regenerateApiKey(clientId: string): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/${clientId}/regenerate-api-key`, null);
  }

  authenticateClient(request: ClientLoginRequestDTO): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/authenticate`, request);
  }

  authenticateClientByApiKey(apiKey: string): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/${apiKey}/authenticate`, null);
  }

  getClientById(clientId: string): Observable<ClientResponseDTO> {
    return this.http.get<ClientResponseDTO>(`${this.baseUrl}/${clientId}`);
  }
}
