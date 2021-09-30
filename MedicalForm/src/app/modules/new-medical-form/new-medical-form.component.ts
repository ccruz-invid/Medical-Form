import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-new-medical-form',
  templateUrl: './new-medical-form.component.html',
  styleUrls: ['./new-medical-form.component.css']
})
export class NewMedicalFormComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  // age: number;
  // showAge: number | undefined;
  // dob: Date;
//   date: any;
// dob: any;
age = 0;

  
 

 

  constructor() { 
        // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
     const currentYear = new Date().getFullYear();
     this.minDate = new Date(currentYear - 121, 0, 1);
     this.maxDate = new Date(currentYear + 1, 11, 31); 

    //   this.age = 0;
    // this.dob = new Date();

//     this.date = {};
//  this.date.age = '';
//  this.dob = this.dob;
     
  }


  ngOnInit(): void {
  }

//   public CalculateAge(event:Event): void { 
  
   
//     console.log(this.dob);
//     const timeDiff = Math.abs(Date.now() - this.dob);
//     console.log(timeDiff);
//     this.date.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
//     console.log(this.dob.age);

// }


CalculateAge(event: { value: Date; }) {
  let timeDiff = Math.abs(Date.now() - event.value.getTime());
  this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
}

}