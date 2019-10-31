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
  version = "unknown";

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get(environment.apiUrl).subscribe((response : any) => {
      this.version = response.version;
    });
  }
}
