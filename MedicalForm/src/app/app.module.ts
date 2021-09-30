import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//NgModules Library
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//Mat Materials
import { MatTimepickerModule } from 'mat-timepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

//NgModules Components
import { NewMedicalFormComponent } from './modules/new-medical-form/new-medical-form.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { PatientComponent } from './modules/patient/patient.component';
import { OrderComponent } from './modules/order/order.component';
import { ReferInstitutionComponent } from './modules/refer-institution/refer-institution.component';
import { ClinicalComponent } from './modules/clinical/clinical.component';
import { SpecimenComponent } from './modules/specimen/specimen.component';

@NgModule({
  declarations: [
    AppComponent,
    NewMedicalFormComponent,
    WelcomeComponent,
    PatientComponent,
    OrderComponent,
    ReferInstitutionComponent,
    ClinicalComponent,
    SpecimenComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MatSliderModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatStepperModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    NgxMaterialTimepickerModule,
    MatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      {path: 'new-medical-form', component: NewMedicalFormComponent}
      //{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
      //{ path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
