import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { VehiclesService } from '../services/vehicles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-vehicle',
  templateUrl: './save-vehicle.component.html',
  styleUrls: ['./save-vehicle.component.css']
})
export class SaveVehicleComponent implements OnInit {

  vehicleForm = new FormGroup({
    license: new FormControl('', [Validators.required]),
    owner: new FormControl('', [Validators.required]),
    brand: new FormControl('', [Validators.required]),
    latitude: new FormControl('', [Validators.required]),
    longitude: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private vehiclesService:VehiclesService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.vehiclesService.create(this.vehicleForm.value).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
