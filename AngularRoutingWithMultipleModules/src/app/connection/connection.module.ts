import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionDetailsComponent } from './connection-details/connection-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConnectionDetailsComponent],
  exports:[ConnectionDetailsComponent]
})
export class ConnectionModule { }
