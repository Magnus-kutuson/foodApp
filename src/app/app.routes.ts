import { Routes } from '@angular/router';
import { HomeComponent } from './core/Pages/home/home.component';
import { PostComponent } from './core/Pages/post/post.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'post/:id',
        component: PostComponent
    }
];
