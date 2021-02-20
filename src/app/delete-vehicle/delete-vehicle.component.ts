import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../services/vehicles.service';

@Component({
  selector: 'app-delete-vehicle',
  templateUrl: './delete-vehicle.component.html',
  styleUrls: ['./delete-vehicle.component.css']
})
export class DeleteVehicleComponent implements OnInit {

  id:string="";

  constructor(private router: Router, private route: ActivatedRoute, private vehiclesService:VehiclesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
   });
  }

  onDelete() {
    this.vehiclesService.delete(this.id).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
