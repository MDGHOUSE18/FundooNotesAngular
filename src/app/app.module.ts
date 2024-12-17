import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Angular Material Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

// App Routing Module
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddnotesComponent } from './Components/addnotes/addnotes.component';
import { AppIconsComponent } from './Components/app-icons/app-icons.component';
import { NoteCardsComponent } from './Components/note-cards/note-cards.component';
import { NotesContainerComponent } from './Components/notes-container/notes-container.component';
import { ArchiveContainerComponent } from './Components/archive-container/archive-container.component';
import { UpdateNoteComponent } from './Components/update-note/update-note.component';
import { TrashContainerComponent } from './Components/trash-container/trash-container.component';

import { GuardService } from './Services/shared/guard.service';
import { FilterPipe } from './Pipes/filter.pipe';

@NgModule({
  declarations: [
    // Declare all components used in the application
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    AddnotesComponent,
    AppIconsComponent,
    NoteCardsComponent,
    NotesContainerComponent,
    ArchiveContainerComponent,
    UpdateNoteComponent,
    TrashContainerComponent,
    FilterPipe
  ],
  imports: [
    // Core Angular modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // Angular Material modules
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,

    // App routing module
    AppRoutingModule
  ],
  providers: [
    GuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
