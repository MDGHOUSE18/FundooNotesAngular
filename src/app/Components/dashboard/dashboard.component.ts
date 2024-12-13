import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isSidenavOpen: boolean = false; // Tracks if the sidenav is toggled open or closed.
  isHovered: boolean = true;   // Tracks hover state of the sidenav.
  isside:boolean=true;
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
}
