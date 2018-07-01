import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SettingsRoutingModule} from './settings-routing.module';
import {BaseComponent} from './base/base.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { ExtraComponent } from './extra/extra.component';

@NgModule({
    imports: [
        CommonModule,
        SettingsRoutingModule,
        ReactiveFormsModule,
    ],
    providers: [FormBuilder],
    declarations: [BaseComponent, ExtraComponent]
})
export class SettingsModule {
}
