import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environment';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    //inizializza firebase con la config in environment
    provideFirebaseApp(() => initializeApp(environment.firebase)),

    //ci rende disponibile l'auth di firebase
    provideAuth(() => getAuth()),
    
    //ci rende disponibile firestore il db che vedremo + avanti
    provideFirestore(() => getFirestore()),
  ]
};
