import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBirreComponent } from './search-birre/search-birre.component';
import { BirreComponent } from './birre/birre.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBirreComponent,
    BirreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
