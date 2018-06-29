import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Subscription} from 'rxjs';
import {SettingsService} from './settings.service';
import {apiDataPrivate} from '../../../../../apiKey';


@Injectable({
    providedIn: 'root'
})
export class SeriesApiService {


    apiKeySub: Subscription;
    apiKey: string = apiDataPrivate.api.key;
    url: string;


    constructor(private http: HttpClient, private settingService: SettingsService) {
        this.url = `${environment.api.baseUrl}${this.apiKey}${environment.api.categories}`;
    }

    getAllSeriesList() {

        return this.http
            .get(this.url);

    }


}
