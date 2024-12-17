import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddnotesComponent } from './Components/addnotes/addnotes.component';
import { AppIconsComponent } from './Components/app-icons/app-icons.component';
import { NoteCardsComponent } from './Components/note-cards/note-cards.component';
import { NotesContainerComponent } from './Components/notes-container/notes-container.component';
import { ArchiveContainerComponent } from './Components/archive-container/archive-container.component';
import { authGuard } from './shared/auth.guard';
import { TrashContainerComponent } from './Components/trash-container/trash-container.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  { path: 'login', component: LoginComponent },
  {path:'register',component:RegisterComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'dashboard',component:DashboardComponent,
    canActivate: [authGuard], // Protect the dashboard route
    children:[
      {path:'notes',component:NotesContainerComponent},
      {path:'archive',component:ArchiveContainerComponent},
      {path:'trash',component:TrashContainerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
