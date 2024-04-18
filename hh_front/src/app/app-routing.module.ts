import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add_company/add-company/add-company.component';
import { CompanyListComponent } from './list_of_company/company-list/company-list.component';
import { EditCompanyComponent } from './edit-company/edit-company/edit-company.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list/vacancy-list.component';

const routes: Routes = [
  { path: '', component: CompanyListComponent},
  { path: 'add-company', component: AddCompanyComponent},
  { path: 'edit-company/:id', component: EditCompanyComponent },
  { path: 'company-vacancies/:id', component: VacancyListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }