import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavComponent} from './components/shared/nav/nav.component';


import {CollapseModule} from 'ngx-bootstrap';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './components/shared/home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthHttpInterceptor} from './components/shared/interceptor/http.interceptor';

export const routes = [
    {path: '', component: HomeComponent},
    {path: 'settings', loadChildren: './components/settings/settings.module#SettingsModule'},
    {path: 'series', loadChildren: './components/series/series.module#SeriesModule'},
];

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        CollapseModule.forRoot(),
        HttpClientModule,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
