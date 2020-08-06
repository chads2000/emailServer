import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private pTitle = 'Email Server';

  get title(): string {
    return this.pTitle;
  }
}