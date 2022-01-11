import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './shared/contact/contact.component';
import { SuccessComponent } from './shared/success/success.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: ComingSoonComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'projects',
    component: ComingSoonComponent,
  },
  {
    path: 'success',
    component: SuccessComponent,
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
