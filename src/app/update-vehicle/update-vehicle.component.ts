import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../services/vehicles.service';
import { Vehicle } from '../entities/vehicle';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {

  id:string="";

  vehicleForm = new FormGroup({
    license: new FormControl('', [Validators.required]),
    owner: new FormControl('', [Validators.required]),
    brand: new FormControl('', [Validators.required]),
    latitude: new FormControl('', [Validators.required]),
    longitude: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private route: ActivatedRoute, private vehiclesService:VehiclesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.vehiclesService.getOneById(this.id).subscribe(vehicle => {
        this.vehicleForm.setValue({
          license: vehicle.license,
          owner: vehicle.owner,
          brand: vehicle.brand,
          latitude: vehicle.latitude,
          longitude: vehicle.longitude
        });
      });
   });
  }

  onSubmit() {
    this.vehicleForm.value.id = this.id;
    this.vehiclesService.update(this.vehicleForm.value).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
