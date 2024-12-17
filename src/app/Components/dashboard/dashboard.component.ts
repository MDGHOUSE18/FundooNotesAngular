import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/dataService/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isSidenavOpen: boolean = false; // Tracks if the sidenav is toggled open or closed.
  isHovered: boolean = true;   // Tracks hover state of the sidenav.
  isside:boolean=true;
  
  constructor(private data:DataService){}

  Search(event:any){
    // console.log(event.target.value)
    this.data.outgoingData(event.target.value.toLowerCase());
  }
  /**
   * Toggles the sidenav between open and closed states.
   */
  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
    this.isHovered = !this.isHovered;
  }
  
  
  hoverSidenav(isHovering: boolean): void {
    if (!this.isSidenavOpen) {
      this.isHovered = isHovering;
    }
  }

  logout() {
    // Confirmation message before logging out
    const confirmation = window.confirm('Are you sure you want to logout?');
  
    if (confirmation) {
      // Clear tokens from localStorage and sessionStorage
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
  
      console.log('Logged out successfully.');
      // Optionally redirect to login page
      window.location.href = '/login'; // Adjust the URL as per your app's route
    } else {
      console.log('Logout cancelled.');
    }
  }
  
}
