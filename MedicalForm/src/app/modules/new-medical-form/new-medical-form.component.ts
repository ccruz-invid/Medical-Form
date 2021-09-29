import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-new-medical-form',
  templateUrl: './new-medical-form.component.html',
  styleUrls: ['./new-medical-form.component.css']
})
export class NewMedicalFormComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  age: any;
  showAge: number | undefined;

  
 

 

  constructor() { 
        // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
     const currentYear = new Date().getFullYear();
     this.minDate = new Date(currentYear - 121, 0, 1);
     this.maxDate = new Date(currentYear + 1, 11, 31); 
    
     
  }


  ngOnInit(): void {
  }

  public CalculateAge() { 
    if(this.age){
      const convertAge = new Date(this.age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
    return this.showAge;
}

}