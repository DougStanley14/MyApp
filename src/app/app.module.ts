import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Store imports
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// SalesStore imports
import { reducer } from './state/sales-data.reducer';
import { SalesDataEffects } from './state/sales-data.effects';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { SalesComponent } from './sales/sales.component';
import { IntelComponent } from './intel/intel.component';
import { HomeComponent } from './home/home.component';
import { ApiModule } from './api/api.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomConfiguration } from './api/custom-configuration';

export function apiConfigFactory(): CustomConfiguration {
  return new CustomConfiguration('https://localhost:7255');
}


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProductsComponent,
    SalesComponent,
    IntelComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule.forRoot(apiConfigFactory),
    StoreModule.forRoot({ salesData: reducer }),
    EffectsModule.forRoot([SalesDataEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
