import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserCreateDTO} from "../Models/Create/user-create.model";
import {UserResponseDTO} from "../Models/Response/user-response.model";

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = 'api/Users';

  constructor(private http: HttpClient) {}

  createUser(request: UserCreateDTO): Observable<UserResponseDTO> {
    return this.http.post<UserResponseDTO>(`${this.baseUrl}`, request);
  }

  getUsersByClient(clientId: string): Observable<UserResponseDTO[]> {
    return this.http.get<UserResponseDTO[]>(`${this.baseUrl}/client/${clientId}`);
  }

  getUserById(userId: string): Observable<UserResponseDTO> {
    return this.http.get<UserResponseDTO>(`${this.baseUrl}/${userId}`);
  }
}
