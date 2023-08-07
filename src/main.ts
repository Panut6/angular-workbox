import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

import { AppModule } from './app/app.module';

import { Workbox } from 'workbox-window';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => loadServiceWorker())
  .catch((err) => console.error(err));

function loadServiceWorker() {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('service-worker.js');
    wb.addEventListener('activated', async (event) => {
      if (!event.isUpdate) {
        console.log('Service worker activated for the first time');
      } else {
        console.log('Service worker activated');
      }
    });

    wb.addEventListener('waiting', (event) => {
      wb.messageSW({ type: 'SKIP_WAITING' });
    });

    wb.addEventListener('installed', (event) => {
      if (!event.isUpdate) {
        console.log('Service worker installed for the first time');
      } else {
        console.log('Service worker installed');
      }
    });

    wb.register();
  }
}
