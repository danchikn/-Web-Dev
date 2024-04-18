import { Company} from '../../models/company';
import { Component, Input } from '@angular/core';
import { Company_service } from '../../service/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-compamy',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']

})

export class AddCompanyComponent{
createCompany() {
throw new Error('Method not implemented.');
}

  @Input() newCompany: Company = {
    name:'',
    description:'',
    address:'',
    city:'',    
  }

  constructor(private companyService: Company_service, private router:Router){ }

  createCompany(){
    this.companyService.addCompany(this.newCompany).subscribe(() => {
      this.newCompany={
        name:'',
        description:'',
        address:'',
        city:'',
      };
      this.router.navigate(['']);
  });
}
}