import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [AppComponent, JwPaginationComponent, PaginationComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
