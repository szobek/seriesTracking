import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-extra',
    templateUrl: './extra.component.html',
    styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements OnInit {

    endPoint: string;

    testSub: Observable<any>;

    type: string;
    singleItem: Observable<any>;

    constructor(private http: HttpClient) {
        this.type = 'all';
        this.endPoint = 'https://jsonplaceholder.typicode.com/posts';

        this.testSub = this.http.get(this.endPoint, {});
    }

    ngOnInit() {

        this.testCall().subscribe((res: Array<any>) => {
            console.log('run http', res);
        });

    }

    testCall(): Observable<Array<SearchItem>> {

        return this.http
            .get<Array<SearchItem>>(this.endPoint, {})
            .pipe(
                map((response: any) => {
                    return response.map(res => new SearchItem(res));
                })
            );

    }


    callSingleItem(id) {
        this.type = 'single';
        this.singleItem = this.http
            .get<Array<SearchItem>>(`${this.endPoint}/${id}`, {})
            .pipe(
                map((response: any) => new SearchItem(response))
            ).subscribe();
    }

}


export class SearchItem {
    title: string;
    id: number;
    userId: number;
    body: string;

    constructor(prop) {
        Object.assign(this, prop);
    }

}
