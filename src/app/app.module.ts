import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { GitService } from '../services/git.service';

import { AppRoutingModule } from './app-routing.module';

import { CardComponent } from '../app/card/card.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, FormsModule],
  providers: [GitService],
  bootstrap: [AppComponent],
})
export class AppModule {}
