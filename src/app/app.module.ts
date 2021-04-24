import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { StorageServiceModule } from  'ngx-webstorage-service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LocalStorageService } from './group8/note/local-storage.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,StorageServiceModule

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },LocalStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
