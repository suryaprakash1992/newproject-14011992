import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { OurProductsComponent } from './our-products/our-products.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { SendEmailComponent } from './send-email/send-email.component';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    OurProductsComponent,
    SendEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    NoopAnimationsModule,
    MatMenuModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatCarouselModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }