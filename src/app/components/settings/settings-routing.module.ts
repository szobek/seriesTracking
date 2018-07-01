import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BaseComponent} from './base/base.component';
import {ExtraComponent} from "./extra/extra.component";

const routes: Routes = [
    {path: '', component: BaseComponent, children: [
            {path: 'extra', component: ExtraComponent}
        ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
