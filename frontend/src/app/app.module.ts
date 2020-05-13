import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routing.module';
import { PagesComponent } from './pages/pages.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './providers/services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes, { useHash: true }),
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
