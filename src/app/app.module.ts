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
import { AboutUsComponent } from './about-us/about-us.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from 'ng2-scroll-to-el';
import {HttpClientModule} from '@angular/common/http';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppFooterComponent } from './app-footer/app-footer.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PaymentDetComponent } from './payment-det/payment-det.component';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';

@NgModule({
  declarations: [
    AppComponent,
    OurProductsComponent,
    SendEmailComponent,
    AboutUsComponent,
    AppFooterComponent,
    PaymentDetComponent
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    AppRoutingModule,
    FlexLayoutModule,
    NoopAnimationsModule,
    MatMenuModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatCarouselModule,
    MatInputModule,
    CarouselModule ,
    HttpClientModule,
    NgxMatSelectSearchModule,
    FormsModule,
    JwSocialButtonsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
