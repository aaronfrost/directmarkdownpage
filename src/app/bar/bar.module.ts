import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { BarRoutingModule } from './bar-routing.module';
import { BarComponent } from './bar.component';

@NgModule({
  declarations: [BarComponent],
  imports: [CommonModule, BarRoutingModule, ScullyLibModule],
})
export class BarModule {}
