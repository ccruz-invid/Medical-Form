import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NewMedicalFormComponent } from './modules/new-medical-form/new-medical-form.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { PatientComponent } from './modules/patient/patient.component';
import { OrderComponent } from './modules/order/order.component';
import { ReferInstitutionComponent } from './modules/refer-institution/refer-institution.component';
import { ClinicalComponent } from './modules/clinical/clinical.component';
import { SpecimenComponent } from './modules/specimen/specimen.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    NewMedicalFormComponent,
    WelcomeComponent,
    PatientComponent,
    OrderComponent,
    ReferInstitutionComponent,
    ClinicalComponent,
    SpecimenComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      {path: 'new-medical-form', component: NewMedicalFormComponent}
      //{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
      //{ path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
