import { Component, OnInit } from '@angular/core';
import { VehiclesService } from "../services/vehicles.service";
import { Vehicle } from '../entities/vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  selectedVehicle?: Vehicle;
  vehicles:Vehicle[] = [];

  constructor(private vehivlesService:VehiclesService) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  onSelect(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
  }

  getVehicles(): void {
    this.vehivlesService.getVehicles()
      .subscribe(vehicles => {this.vehicles = vehicles});
  }

}
