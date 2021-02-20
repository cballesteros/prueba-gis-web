import { Injectable } from '@angular/core';
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Vehicle } from '../entities/vehicle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  private vehiclesUrl:string = "http://localhost:3000/vehicles"

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET vehicles from the server */
  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.vehiclesUrl);
  }

  getOneById(id:string): Observable<Vehicle> {
    return this.http.get<Vehicle>(this.vehiclesUrl + "?id=" + id);
  }

  create(vehicle:Vehicle): Observable<any> {
    return this.http.post(this.vehiclesUrl, vehicle);
  }

  update(vehicle:Vehicle): Observable<any> {
    return this.http.put(this.vehiclesUrl, vehicle);
  }

  delete(id:string) : Observable<any> {
    return this.http.delete(this.vehiclesUrl + "?id=" + id);
  }

  /** Log a message with the MessageService */
  private log(message: string) {
    this.messageService.add(`Vehicles: ${message}`);
  }
}
