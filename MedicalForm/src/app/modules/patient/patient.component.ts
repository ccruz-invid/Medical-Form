import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';
//import { StarComponent } from "../shared/star.component";
import { IPatient } from "./patient";
import { PatientService } from "./patient.service";

@Component({
    //selector: 'pm-products',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.css'],
    //providers: [ProductService]
    //directives: [StarComponent]
})
export class PatientListComponent implements OnInit, OnDestroy {
    pageTitle = 'Patient List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    errorMessage = '';
    sub!: Subscription;

    private _listFilter = '';
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string){
      this._listFilter = value;
      //console.log('In setter:', value);
      this.filteredPatients = this.performFilter(value);
    }
    
    filteredPatients: IPatient[] = [];
    products: IPatient[] = [];

    constructor(private patientService: PatientService){}

    performFilter(filterBy: string): IPatient[]{
      filterBy = filterBy.toLocaleLowerCase();
      return this.patients.filter((patient: IPatient) =>
      patient.FirstName.toLocaleLowerCase().includes(filterBy));
    }
    toggleImage(): void {
      this.showImage = !this.showImage;
    }
    ngOnInit(): void {
    this.sub = this.patientService.getProducts().subscribe({
      next: patients => { 
        this.patients = patients;
        this.filteredPatients = this.patients;
      },
      error: err => this.errorMessage = err
    });
  }

    ngOnDestroy(){
      this.sub.unsubscribe();
    }
      //console.log('In OnInit');
      //this._listFilter = 'saw';
      
    onRatingClicked(message: string): void {
      this.pageTitle = 'Order List: ' + message;
    }
}

