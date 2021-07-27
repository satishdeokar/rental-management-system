import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryDetails: any = [];
  currentSelected: any = '';
  constructor(private httpService: ServiceService) { }

  ngOnInit(): void {
    this.currentSelected = '';
    this.categoryDetails = [];
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
              if (this.currentSelected === ele.name) {
                this.categoryDetails.push(ele);
              }
            });
          });
        });
      }
    })
  }

}
