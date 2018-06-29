import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { ListComponent } from './list/list.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    SeriesRoutingModule
  ],
    providers: [HttpClientModule],
  declarations: [ListComponent]
})
export class SeriesModule { }
