import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AssignedNumberRequestDTO} from "../Models/Request/assigned-number-request.model";
import {AssignedNumberResponseDTO} from "../Models/Response/assigned-number-response.model";

@Injectable({
  providedIn: 'root',
})
export class AssignedNumbersService {
  private baseUrl = 'api/AssignedNumbers';

  constructor(private http: HttpClient) {}

  assignNumber(request: AssignedNumberRequestDTO): Observable<AssignedNumberResponseDTO> {
    return this.http.post<AssignedNumberResponseDTO>(`${this.baseUrl}`, request);
  }

  getAssignedNumbersByClient(clientId: string): Observable<AssignedNumberResponseDTO[]> {
    return this.http.get<AssignedNumberResponseDTO[]>(`${this.baseUrl}/${clientId}/AssignedNumbersByClient`);
  }

  getAssignedNumbersByRaffle(raffleId: string): Observable<AssignedNumberResponseDTO[]> {
    return this.http.get<AssignedNumberResponseDTO[]>(`${this.baseUrl}/${raffleId}/AssignedNumbersByRaffle`);
  }
}
