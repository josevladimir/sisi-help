import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/pages/index/index.component';
import { DirectoryComponent } from './components/shared/directory/directory.component';

/**
 * Material Components'
 */

import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DirectoryComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatIconModule,
    MatTreeModule,
    MatButtonModule,
    MatSidenavModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
