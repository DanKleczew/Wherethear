import { Routes } from '@angular/router';
import { BodyFrontPageComponent } from './body-front-page/body-front-page.component';
import { BodyCityScreenComponent } from './body-city-screen/body-city-screen.component';
import { BodyListCitiesComponent } from './body-list-cities/body-list-cities.component';

export const routes: Routes = [
    {path : '', component : BodyFrontPageComponent},
    {path : 'weather', component : BodyCityScreenComponent},
    {path : 'previous-locations', component: BodyListCitiesComponent},
    {path : '**', component: BodyFrontPageComponent}
];

