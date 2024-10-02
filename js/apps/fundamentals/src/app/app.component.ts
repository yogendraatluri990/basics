import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {ThemesComponent} from '@js/themes';

@Component({
  standalone: true,
  imports: [ThemesComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fundamentals';
}
