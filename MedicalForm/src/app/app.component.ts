import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template:  `
  <nav class='navbar navbar-expand navbar-light bg-light'>
  <a class='navbar-brand'>{{pageTitle}}</a>
  <ul class='nav nav-pills'>
    <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
    <li><a class='nav-link' routerLinkActive='active' routerLink='/patient'>Patients</a></li>
    <li><a class='nav-link' routerLinkActive='active' routerLink='/specimen'>Specimen</a></li>
    <li><a class='nav-link' routerLinkActive='active' routerLink='/clinical'>Clinical</a></li>
    <li><a class='nav-link' routerLinkActive='active' routerLink='/refer-institution'>Referring Institution</a></li>
    <li><a class='nav-link' routerLinkActive='active' routerLink='/order'>Orders</a></li>
  </ul>
</nav>
<!--<div class="col-1 d-flex justify-content-end align-items-center">-->
<nav class="my-2 my-md-0 mr-md-3">
            <a class="text-muted" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
            </a>
            <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
          <!--</div>-->      
      </nav>

      <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between">
        <li><a class='nav-link' routerLinkActive='active' routerLink='/new-medical-form'>New Medical Form</a></li>
        </nav>
      </div>

      

<div class='container'>
<router-outlet></router-outlet>

</div>

`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Medical Form';
}