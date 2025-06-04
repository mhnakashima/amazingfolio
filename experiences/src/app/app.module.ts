import { NgModule, Injector, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { isWebComponentMode } from '../config/config';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: []  // Don't bootstrap by default
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef) {
    // Use the configuration system to determine the mode
    const isWebComponent = isWebComponentMode();

    if (isWebComponent) {
      // Web Component mode - just register the custom element
      const experiencesElement = createCustomElement(AppComponent, {
        injector: this.injector
      });
      
      if (!customElements.get('experiences-element')) {
        customElements.define('experiences-element', experiencesElement);
      }
    } else {
      // Standalone mode - create app-root and bootstrap
      if (!document.querySelector('app-root')) {
        const rootElement = document.createElement('app-root');
        document.body.appendChild(rootElement);
      }
      appRef.bootstrap(AppComponent);
    }
  }
} 