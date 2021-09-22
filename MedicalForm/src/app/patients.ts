export interface IPatient{
    PatientID: string;
    FirstName: string;
    LastName: string;
    SecondLastName: string;
    MiddleName: string;
    DateOfBirth: {Date: 'MM-dd-yyyy'};
    Age: number;
    Gender: String;
    Pregnant: string;
    GestationTime: number;
    Address: String;
    City: String;
    State: String;
    //ZipCode: {Number: '1.0-5'};
    Phone: Number;
    SSN: number;
}
  
  export const patients = [
    {
        PatientID: 1,
        FirstName: "Maria",
        LastName: "Rodriguez",
        SecondLastName: "Hernandez",
        MiddleName: "Consuela",
        DateOfBirth: "09/24/1954",
        Age: 58,
        Gender: "Female",
        Pregnant: "No",
        GestationTime: 0,
        Address: "Urb. Maria Cadilla Calle 5 A10",
        City: "Toa Baja",
        State: "Puerto Rico",
        //ZipCode: 00949, 
        Phone: 787-569-4592,
        SSN: 4581
    },
    
    {
        PatientID: 2,
        FirstName: "Carlos",
        LastName: "Santiago",
        SecondLastName: "Ramirez",
        MiddleName: "N/A",
        DateOfBirth: "03/15/1944",
        Age: 70,
        Gender: "Male",
        Pregnant: "No",
        GestationTime: 0,
        Address: "Urb. Monte Sol Calle 11 AQ10",
        City: "Toa Alta",
        State: "Puerto Rico",
        //ZipCode: 00953, 
        Phone: 787-257-2597,
        SSN: 8416
    }
  ];
