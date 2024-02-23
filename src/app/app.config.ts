import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"hello-webapp-f2378","appId":"1:828003729314:web:4fce56025e4e062a4ebcfb","storageBucket":"hello-webapp-f2378.appspot.com","apiKey":"AIzaSyCVL2Zwehb9mFKV9Xcg1EbqV7kdwav3YnE","authDomain":"hello-webapp-f2378.firebaseapp.com","messagingSenderId":"828003729314"}))), importProvidersFrom(provideAuth(() => getAuth()))]
};
