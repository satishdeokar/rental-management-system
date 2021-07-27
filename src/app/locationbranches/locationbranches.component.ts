import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-locationbranches',
  templateUrl: './locationbranches.component.html',
  styleUrls: ['./locationbranches.component.css']
})
export class LocationbranchesComponent implements OnInit {
  branchDetails: any = [];
  currentSelected: any = '';
  constructor(private httpService: ServiceService) { }

  ngOnInit(): void {
    this.currentSelected = '';
    this.branchDetails = [];
    this.httpService.currentSelected.subscribe((response: any) => {
      if (response) {
        this.currentSelected = response;
      }
    })

    this.httpService.getJSON().subscribe((response: any) => {
      if (response) {
        response.data.locations.forEach(element => {
          element.branches.forEach(list => {
            if (this.currentSelected === list.branch_id) {
              this.branchDetails.push(list);
            }
          });
        });
      }
    })
  }

}
