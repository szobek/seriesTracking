import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    apiKey$: BehaviorSubject<string> = new BehaviorSubject<string>('');




    constructor() {
        if (localStorage.apiKey && localStorage.apiKey !== '') {
            this.apiKey$.next(localStorage.apiKey);
        } else {
            this.apiKey$.next(null);
        }

    }

    saveApiKey(key) {
        localStorage.apiKey = key;
        this.apiKey$.next(key);
    }
}
