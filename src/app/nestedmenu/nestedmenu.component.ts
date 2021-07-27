
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-nestedmenu',
  templateUrl: './nestedmenu.component.html',
  styleUrls: ['./nestedmenu.component.css']
})
export class NestedmenuComponent implements OnInit {

  constructor(private service: ServiceService, private route: Router) { }
  selectedCountryControl = new FormControl();
  catalogData: any = [];
  public classifications: string[] = [];
  public selectedItem: any;

  ngOnInit(): void {
    this.service.getJSON().subscribe(response => {
      if (response) {
        this.catalogData = response.data.locations;
      }
    });
  }

  public onBranchesSelected(data: any) {
    this.selectedItem = data.srcElement.value.toString();
    if (this.selectedItem) {
      this.service.changeSelected(this.selectedItem);
      this.route.navigate(['/locations']);
    }
  }

  public onCategorySelected(data: any) {
    this.selectedItem = data.srcElement.value.toString();
    if (this.selectedItem) {
      this.service.changeSelected(this.selectedItem);
      this.route.navigate(['/category']);
    }
  }

  public onSubCategoriesSelected(data: any): void {
    this.selectedItem = data.srcElement.value.toString();
    if (this.selectedItem) {
      this.service.changeSelected(this.selectedItem);
      this.route.navigate(['/subcategory']);
    }
  }
}
