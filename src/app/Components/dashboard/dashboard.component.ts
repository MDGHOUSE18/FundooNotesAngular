import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isSidenavOpen: boolean = true; // Tracks if the sidenav is toggled open or closed.
  isHovered: boolean = false;   // Tracks hover state of the sidenav.

  /**
   * Toggles the sidenav between open and closed states.
   */
  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  /**
   * Handles hover behavior to expand or collapse the sidenav.
   * @param hoverState - Indicates if hover is active (true) or not (false).
   */
  hoverSidenav(hoverState: boolean): void {
    this.isHovered = hoverState;
  }
}
