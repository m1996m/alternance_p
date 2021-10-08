import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home' },
    { title: 'Participant', url: '/participant-index'},
    { title: 'Agenda', url: '/agneda-index' },
  ];
  constructor() {}
}
