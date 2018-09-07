import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { AppSharedModule } from './app-shared.module'
import { SampleDataService } from './sample-data.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(SampleDataService),
    AppRoutingModule,
    AppSharedModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
