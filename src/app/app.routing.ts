import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import{ ModuleWithProviders } from '@angular/core';


const APP_ROUTES: Routes =[

    { path : '', component : SearchComponent},
    { path : 'about', component : AboutComponent}
   
];

export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);