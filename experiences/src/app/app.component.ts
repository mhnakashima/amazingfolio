import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',  // Keep it simple with just app-root
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'experiences';
  isWebComponent: boolean;

  constructor() {
    // Check if running as web component
    this.isWebComponent = document.querySelector('experiences-element') !== null;
    console.log(`Running as ${this.isWebComponent ? 'Web Component' : 'Standalone App'}`);
  }
}
