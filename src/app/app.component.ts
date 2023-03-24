import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title!: string;
  description!: string;

  ngOnInit() {
    this.title = 'Test';
    this.description = 'test de description';
  }
}
