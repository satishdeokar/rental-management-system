import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.css']
})
export class CategorydetailsComponent implements OnInit {

  subCategoryDetails: any = [];
  currentSelected: any = '';
  constructor(private httpService: ServiceService) { }

  ngOnInit(): void {
    this.currentSelected = '';
    this.subCategoryDetails = [];
    this.httpService.currentSelected.subscribe((response: any) => {
      if (response) {
        this.currentSelected = response;
      }
    })

    this.httpService.getJSON().subscribe((response: any) => {
      if (response) {
        response.data.locations.forEach(element => {
          element.branches.forEach(list => {
            list.categories.forEach(ele => {
              ele.subcategories.forEach(e => {
                if (this.currentSelected === e.name) {
                  this.subCategoryDetails.push(e);
                }
              });
            });
          });
        });
      }
    })
  }
}
