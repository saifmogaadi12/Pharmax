import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RendezVousListComponent } from './components/rendez-vous-list/rendez-vous-list.component';
import { RendezVousDetailsComponent } from './components/rendez-vous-details/rendez-vous-details.component';
import { AddRendezVousComponent } from './components/add-rendez-vous/add-rendez-vous.component';

const routes: Routes = [
  { path: '', redirectTo: 'rendezvous', pathMatch: 'full' },
  { path: 'rendezvous', component: RendezVousListComponent },
  { path: 'rendezvous/:id', component: RendezVousDetailsComponent },
  { path: 'add', component: AddRendezVousComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
