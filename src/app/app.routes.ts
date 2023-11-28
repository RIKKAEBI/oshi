import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  {
    path: '', title: 'Home Page', component: HomeComponent,
  },
  {
    path: 'settings', title: 'About Page', component: SettingsComponent,
  },
];
