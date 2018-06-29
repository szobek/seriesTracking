import {Component, OnDestroy, OnInit} from '@angular/core';
import {SettingsService} from '../../shared/services/settings.service';
import {Subscription} from 'rxjs';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, OnDestroy {


    apiKey: string;
    apiKeySub: Subscription;
    apiKeyForm: FormGroup;

    constructor(private settingsService: SettingsService, private formBuilder: FormBuilder) {
        this.apiKeySub = this.settingsService.apiKey$.subscribe(
            (key: any) => {
                console.log('az api key lejött,', key);
                this.apiKey = key;
            },
            error => console.log('hiba az api kéy kekérés közben', error),
            () => {
                console.log('lefutott a lekérése az apikey-re');
            }
        );
    }

    ngOnInit() {
        this.apiKeyForm = this.formBuilder.group({
            apiKey: new FormControl(this.apiKey, [])
        });
    }

    ngOnDestroy(): void {
        this.apiKeySub.unsubscribe();
    }

    saveForm() {
        this.settingsService.saveApiKey(this.apiKeyForm.controls['apiKey'].value);
    }


}
