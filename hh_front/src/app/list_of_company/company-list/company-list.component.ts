import { Component, OnInit } from '@angular/core';
import { Company_service } from '../../service/company.service';
import { Company } from '../../models/company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-company',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = []

  constructor(private Company_service: Company_service, private router: Router) {}
  
  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies() {
    this.Company_service.getAllCompanies().subscribe((companies) => {
      this.companies = companies;
      console.log(companies);
    })
  }

  navigateToAddCompany() {
    this.router.navigate(['/add-company']);
    console.log("Navigating")
  }

  editCompany(companyId: number | undefined) {
    if (companyId !== undefined) {
      this.router.navigate(['/edit-company', companyId]);
    }
  }

  deleteCompany(companyId: number | undefined) {
    if (companyId !== undefined) {
      this.Company_service.deleteCompany(companyId).subscribe(() => {
        this.companies = this.companies.filter(company => company.id !== companyId);
      });
    }
  }

  navigateToCompanyVacancies(companyId: number | undefined) {
    const id = companyId as number;
    if (id !== undefined) {
      this.router.navigate(['/company-vacancies', id]);
    }
  }
}