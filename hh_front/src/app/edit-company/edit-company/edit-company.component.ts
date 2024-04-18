import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Company } from '../../models/company';
import { Company_service } from '../../service/company.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrl: './edit-company.component.css'
})
export class EditCompanyComponent implements OnInit{
  company: Company={
    id: 0,
    name:'',
    description: ' ',
    city: ' ',
    address: '',
  };

  constructor(private route: ActivatedRoute, private router: Router, private companyService: Company_service){}

  ngOnInit(): void {
      this.route.params.subscribe(params =>{
        const companyId = params['id'];
        console.log(companyId);
        this.companyService.getCompany(companyId).subscribe((company) =>{
          this.company = company
          console.log(this.company)
        })

      })
    }
    updateCompany(){
      if(this.company && this.company.id != undefined){
        this.companyService.updateCompany(this.company.id,this.company).subscribe(() =>{
          this.router.navigate(['']);
        });
      }
    }

  }
