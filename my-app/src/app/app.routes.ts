import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
        title:'Home Page'
    },
    {
        path:'details/:id',
        component: DetailsComponent,
        title:'Details Page'
    },
     {
        path:'register/:id',
        component: DetailsComponent,
        title:'register Page'
    }
];