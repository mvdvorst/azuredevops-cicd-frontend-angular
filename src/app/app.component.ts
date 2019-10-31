import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'innovatiedag-angular';
  summary = "";
  temperature: 0;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.refreshWeatherInfo();
  }

  refreshWeatherInfo() {
    this.httpClient.get(environment.apiUrl).subscribe((response : any) => {
      this.summary = response.summary;
      this.temperature = response.temperatureC;
    });
  }
}
