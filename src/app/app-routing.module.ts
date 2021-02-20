import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SaveVehicleComponent } from './save-vehicle/save-vehicle.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { DeleteVehicleComponent } from './delete-vehicle/delete-vehicle.component';

const routes: Routes = [
  { path: 'vehicles/save',        component: SaveVehicleComponent},
  { path: '',                     component: VehiclesComponent},
  { path: 'vehicles/update/:id',  component: UpdateVehicleComponent},
  { path: 'vehicles/delete/:id',  component: DeleteVehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
