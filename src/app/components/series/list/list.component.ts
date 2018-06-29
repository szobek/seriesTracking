import { Component, OnInit } from '@angular/core';
import {SeriesApiService} from "../../shared/services/series-api.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private seriesService: SeriesApiService) { }

  ngOnInit() {
    this.getSeriesList();
  }

  getSeriesList() {
    this.seriesService.getAllSeriesList().subscribe();
  }

}
