import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { ADMIN_ROUTES } from './routes';

  bootstrapApplication(AppComponent, {
    providers: [
      BrowserAnimationsModule,
      provideRouter(ADMIN_ROUTES),
      provideAnimations()
    ]
  });
