import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BackgroundOverlayDirective } from './directives/background-overlay.directive';
import { HomePageComponent } from './home-page/home-page.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DiaporamaComponent } from './diaporama/diaporama.component';
import { AppCollectionsComponent } from './app-collections/app-collections.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { Collection1Component } from './collection1/collection1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailService } from './services/email.service';



@NgModule({
  declarations: [
    AppComponent,
    BackgroundOverlayDirective,
    HomePageComponent,
    HeaderComponent,
    DiaporamaComponent,
    AppCollectionsComponent,
    ContactComponent,
    FooterComponent,
    Collection1Component
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
