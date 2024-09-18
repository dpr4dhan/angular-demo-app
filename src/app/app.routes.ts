import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth.guard";
import {LogoutComponent} from "./logout/logout.component";
import {CalculatorComponent} from "./calculator/calculator.component";
import {GalleryComponent} from "./gallery/gallery.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Us',
  },
  {
    path: 'contact-us',
    component: ContactComponent,
    title: 'Contact Us',
    canDeactivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
    canActivate: [AuthGuard],
  },
  {
    path: 'logout',
    component: LogoutComponent,
    title: 'Logout',
    canActivate: [AuthGuard],
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
    title: 'Calculator'
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    title: 'Gallery'
  }

];
