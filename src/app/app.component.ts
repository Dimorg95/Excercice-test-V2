import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  paperApiUrl = '';
  paperData = {
    siren: '',
    name: '',
    person: '',
    denomination: '',
    codeNaf: '',
  };
  constructor(public http: HttpClient) {
    this.readAPI('https://api.pappers.fr/v2/google').subscribe((data) => {
      console.log(data);
    });
  }

  readAPI(URL: string) {
    return this.http.get(URL);
  }

  ngOnInit() {}
}
