import { HomePageComponent } from './home-page/home-page.component';
import { Routes } from '@angular/router';
import { DiaporamaComponent } from './diaporama/diaporama.component';
import { AppCollectionsComponent } from './app-collections/app-collections.component';
import { ContactComponent } from './contact/contact.component';
import { Collection1Component } from './collection1/collection1.component';




export const ROUTES: Routes = [
    { path: '', redirectTo: 'diaporama', pathMatch: 'full'},
    { path: 'diaporama', component: DiaporamaComponent },
    { path: 'collections', component: AppCollectionsComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'makeba', component: Collection1Component }
];
