import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RaffleCreateDTO} from "../Models/Create/raffle-create.model";
import {RaffleResponseDTO} from "../Models/Response/ raffle-response.model";
@Injectable({
  providedIn: 'root',
})

export class RafflesService {
  private baseUrl = 'api/Raffles';

  constructor(private http: HttpClient) {}

  createRaffle(raffleDto: RaffleCreateDTO): Observable<RaffleResponseDTO> {
    return this.http.post<RaffleResponseDTO>(`${this.baseUrl}`, raffleDto);
  }
  getActiveRafflesByClient(clientId: string): Observable<RaffleResponseDTO[]> {
    return this.http.get<RaffleResponseDTO[]>(`${this.baseUrl}/${clientId}`);
  }
}
