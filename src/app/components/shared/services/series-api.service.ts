import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Subscription} from 'rxjs';
import {SettingsService} from './settings.service';



@Injectable({
    providedIn: 'root'
})
export class SeriesApiService {


    apiKeySub: Subscription;
    apiKey: string = '';
    url: string;


    constructor(private http: HttpClient, private settingService: SettingsService) {
        this.apiKeySub = settingService.apiKey$.subscribe((key: string) => {
            this.apiKey = key;
        });

        this.url = `${environment.api.baseUrl}${this.apiKey}${environment.api.categories}`;
    }

    getAllSeriesList() {

        const headers = new HttpHeaders()
            .set('X-Content-Type-Options', 'nosniff')
            .append('Access-Control-Allow-Origin','*')
        ;
        return this.http
            .get(this.url, {headers: headers});

    }


}
