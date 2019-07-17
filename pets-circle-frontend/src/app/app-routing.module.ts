import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { MatchComponent } from './match/match.component';
import { SearchComponent } from './search/search.component';
import { YourPetsComponent } from './your-pets/your-pets.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { MissingPetsComponent } from './missing-pets/missing-pets.component';
import { MessagesComponent } from './messages/messages.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'pet-details',
    component: PetDetailsComponent
  },
  {
    path: 'messages',
    component: MessagesComponent,
  },
  {
    path: 'your-pets',
    component: YourPetsComponent,
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'missing-pets',
    component: MissingPetsComponent
  },
  {
    path: 'match',
    component: MatchComponent,
    children: [
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'near-by',
        component: MapComponent
      },
      {
        path: '',
        redirectTo: '/match/search',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }