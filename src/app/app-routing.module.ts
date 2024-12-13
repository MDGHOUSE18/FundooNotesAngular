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

const routes: Routes = [
  {path:'',component:LoginComponent},
  { path: 'login', component: LoginComponent },
  {path:'register',component:RegisterComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'dashboard',component:DashboardComponent,
    children:[
      {path:'notes',component:NotesContainerComponent}
    ]
  },
  {path:'addnotes',component:AddnotesComponent},
  {path:'icons',component:AppIconsComponent},
  {path:'notes',component:NoteCardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
