import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, withComponentInputBinding, withHashLocation} from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withHashLocation()
    ),
    provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"code-lab-tm","appId":"1:463100036253:web:7639e33ab9bec495798074","storageBucket":"code-lab-tm.appspot.com","apiKey":"AIzaSyBofScwELLl_1MkUIeMdZSDbnIiDzrD9og","authDomain":"code-lab-tm.firebaseapp.com","messagingSenderId":"463100036253","measurementId":"G-W60G3379CS"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
};
