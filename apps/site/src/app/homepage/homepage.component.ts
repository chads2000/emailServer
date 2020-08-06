import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
